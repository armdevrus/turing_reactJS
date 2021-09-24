import React from 'react'
import { makeStyles } from '@material-ui/core'
import { ImageList, ImageListItem, ImageListItemBar } from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination';


import styles from './ImagesGallary.module.css'
import HandleForm from '../../components/HandleForm/HandleForm'
import PaginationOld from '../../components/Pagination/Pagination'

const BASE_URL = 'https://pixabay.com/api/'
const API_KEY = '21784981-d13d311b92e9193e9bcd05db0'
const PER_PAGE = 10

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 500,
    height: 650,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)'
  },
  pagination: {
    marginTop: '20px'
  }
}))

const ImagesGallery = () => {

  const [images, setImages] = React.useState([])
  const [pages, setPages] = React.useState(0)
  const [currentQuery, setCurrentQuery] = React.useState('')
  const [currentPage, setCurrentPage] = React.useState(1)

  const getImages = async (query = 'cat', page = 1) => {
    setCurrentQuery(query)
    const url = `${BASE_URL}?key=${API_KEY}&q=${query}&per_page=${PER_PAGE}&page=${page}`

    const response = await fetch(url)

    if (response.ok) {
      const result = await response.json()
      setImages(result.hits)
      setPages(Math.ceil(result.totalHits / PER_PAGE))
      setCurrentPage(page)
    }
  }

  React.useEffect(() => {
    getImages()
  }, [])

  const handleOnChangePage = (page) => {
    getImages(currentQuery, page)
  }

  const handleOnChangeMaterialPage = (event, value) => {
    handleOnChangePage(value)
  }

  const classes = useStyles()

  return (
    <>
      <h1>Images Gallery</h1>
      <HandleForm onClick={getImages}/>
      {/*{images.map((image, index) => <img key={index} src={image.previewURL}/>)}*/}

      <div className={classes.root}>
        <ImageList rowHeight={180} className={classes.imageList}>
          {images.map((item) => (
            <ImageListItem key={item.previewURL}>
              <img src={item.previewURL} alt={item.title}/>
              <ImageListItemBar
                title={item.tags}
                subtitle={<span>by: {item.user}</span>}
              />
            </ImageListItem>
          ))}
        </ImageList>
        <div className={classes.pagination}>
          <Pagination color="primary" count={pages} page={currentPage} onChange={handleOnChangeMaterialPage}/>
        </div>
      </div>
      {/*<PaginationOld maxPage={pages} changePage={handleOnChangePage}/>*/}

    </>
  )
}

export default ImagesGallery