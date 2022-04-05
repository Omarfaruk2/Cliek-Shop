import React from 'react'
import { Card } from 'react-bootstrap'
import "./Blogs.css"
const Blogs = () => {
    return (
        <div className='container my-3 bg-light'>
            <Card body className='my-3 border border-dark rounded'>
                <h3>Context API</h3>
                <hr />
                <p> <b>
                    #1 The React Context API is a way for a React app to easily produce global variables that can be passed around in website. <br />
                    #2 This is the alternative to "prop drilling" or moving props from grandparent to child to parents. <br />
                    #3 It easy our work and workFriendly. <br />
                    #4 Context is also touted as an easier, lighter approach to state management. <br />
                    #5  Provider is a component that as it's names suggests provides the state to its children. <br />
                    #6 Another says, in a typical React application, data is passed top-down (parent to child) via props. <br />
                    #7 Declare in one grandparent component one times with warp and it use in every components in those are warp in Context Provider.


                </b>
                </p>
            </Card>
            <Card body className='my-3 border border-dark'>
                <h3>Semantic HTML TAG</h3>
                <hr />
                <p><b>
                    #1 A semantic element clearly describes its meaning to both the browser and the developer. <br />
                    #2 tags such as "b" and "i" tag are not semantic. They define only how the text should look not meaningfull.. <br />
                    #3 The benefit of writing semantic HTML stems from what should be the driving goal of any web pag . <br />
                    #4 The semantic HTML tags help the search engines ("Seo"). <br />
                    #5 The main occurs is semantic tags make it clear to the browser what the meaning of a page and what is contents in this web page. <br />
                    #6 Tells nothing about its content. Examples of semantic elements: Form  tag, Table  tag , and article tag - Clearly defines its content.. <br />
                    #7 The pages made with semantic elements are much easier to read. <br />
                    #8 It has greater accessibility. It offers a better user experience.

                </b></p>
            </Card>
        </div>
    )
}

export default Blogs