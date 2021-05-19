import React from 'react'
import ReactDom from 'react-dom'

//CSS
import './index.css'


//JSX RULES
//return single element
//div / section / article or Fragment
//use camelCase for html attribute
//className instead of class
//close every element
//formatting


//NESTED COMPONENTS, REACT TOOLS

//SETUP VARS

const firstBook ={
        title:'Zero Fail: The Rise and Fall of the Secret Service',
        author:' Amelia Hempwirth',
        img: 'https://images-na.ssl-images-amazon.com/images/I/81cNkDeurKL._AC_UL200_SR200,200_.jpg'

}
const secondBook ={
        title:'The Four Agreements: A Practical Guide to Personal Freedom (A Toltec Wisdom Book',
        author:' Don Miguel Ruiz',
        img: 'https://images-na.ssl-images-amazon.com/images/I/91p5b0UgbKL._AC_UL200_SR200,200_.jpg'

}


function BookList(){
    return( 
    <section className='booklist'>  
        <Book  title={firstBook.title} author={firstBook.author} img={firstBook.img}/>
        <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}  />
        <Book/>
        <Book/>

    </section>
    );
}

function Book(title, img, author){
    //object destructuring
    // const {title, img, author} = props;
    console.log()
    return (<article className='book'>
        <img src={img} alt=''/>
        <h1>{title} </h1>
        <h4 style={{color:'#617d98', fontSize: '0.75rem', marginTop: '0.25rem' }}>{author}</h4>
    </article>);
}




//render method takes two things,
//what to render and where to render
ReactDom.render(<BookList /> , document.getElementById('root'));