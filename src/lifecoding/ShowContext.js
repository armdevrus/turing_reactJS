import React from 'react'

const themes = {
  light: {
    name: 'light',
    background: "#c2aaaa",
    fontColor: '#000'
  },
  dark: {
    name: 'dark',
    background: "#000",
    fontColor: '#fff'
  }
}

const ThemeContext = React.createContext([])

const App = () => {
  const [context, setContext] = React.useState(themes.light)
  return(
    <ThemeContext.Provider value={[context, setContext]}>
      <div>
        Main component
        <Block/>
      </div>
    </ThemeContext.Provider>
  )
}

const Block = () => {
  const [theme] = React.useContext(ThemeContext)
  return(
    <div style={{border: '1px solid black',
      background: theme.background, color: theme.fontColor}}>
        This is my block
      <SubBlock/>
    </div>
  )
}

const SubBlock = () => {
  const [theme, setTheme] = React.useContext(ThemeContext)
  return(
    <div style={{border: '1px solid black', height: '100px',
      width:'100px', background: theme.background, color: theme.fontColor}}>
      This is my sub Block
      <button onClick={
        () => setTheme(theme.name === 'light' ? themes.dark : themes.light)}
      >Change theme</button>
    </div>
  )
}

export default App