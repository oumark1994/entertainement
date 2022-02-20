import React from 'react'
import { Pagination } from '@material-ui/lab'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
const darkTheme = createMuiTheme({
    type:'dark',
})

const CustomPagination = ({setPage,numOfPages=10}) => {
    const handlePageChange = (page)=>{
        setPage(page);
        window.scroll(0,0);
    }
  return (
    <div>
        <ThemeProvider theme={darkTheme}>
        <Pagination hideNextButton hidePrevButton color="primary" count={numOfPages} onChange={(e)=>handlePageChange(e.target.textContent)}/>
        </ThemeProvider>
        </div>
  )
}
 
export default CustomPagination