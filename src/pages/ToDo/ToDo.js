import React from 'react'
import { useDispatch } from 'react-redux'
// import moment from 'moment'
// import 'moment/locale/es'
// import 'moment/locale/ru'

import styles from './ToDo.module.css'
import HandleForm from '../../components/HandleForm/HandleForm'
import ToDoList from '../../components/ToDoList/ToDoList'
import { addElem } from '../../slices/ToDoSlice'

// moment.locale('ru')

const ToDo = () => {

//   moment.locale('fr');
//   const m = moment(1316116057189);
//   console.log(m.fromNow()); // il y a une heure
//
//   var march = moment('2017-03')
//   console.log(march.format('MMMM')) // 'March'
//
//   moment.locale('de') // returns the new locale, in this case 'de'
//   console.log(march.format('MMMM')) // 'March' still, since the instance was before the locale was set
//
//   var deMarch = moment('2017-03')
//   console.log(deMarch.format('MMMM')) // 'März'
//
// // You can, however, change just the locale of a specific moment
//   march.locale('es')
//   console.log(march.format('MMMM')) // 'Marzo'
//
//   const date = new Date()
//
//   const momentDate = moment()
//   const pastMomentDate = moment('2013-02-08 09:30:26.123')

  const dispatch = useDispatch()

  const addElemToList = (elem) => {
    dispatch(addElem(elem))
  }
  return (
    <div className={styles.container}>
      {/*{momentDate.format('YYYY-MMMM-dddd hh:mm:ss')}*/}
      {/*<br/>*/}
      {/*Past date: {pastMomentDate.format('YYYY-MMMM-dddd hh:mm:ss')}*/}
      {/*<br/>*/}
      {/*Result: {momentDate.diff(pastMomentDate, 'years')}*/}
      {/*<br/>*/}
      {/*Result2: {pastMomentDate.diff(momentDate, 'days')}*/}
      {/*<br/>*/}
      {/*number of Days: {momentDate.daysInMonth()}*/}
      {/*<br/>*/}
      {/*{console.log(momentDate.isDST())}*/}
      {/*DST: {momentDate.isDST()}*/}
      {/*<br/>*/}
      {/*{console.log(momentDate.isLeapYear())}*/}
      {/*Is Leap Year: {momentDate.isLeapYear()}*/}
      {/*<br/>*/}
      <HandleForm onClick={addElemToList}/>
      <ToDoList/>
    </div>
  )
}

export default ToDo
