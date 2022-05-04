import React, { useEffect, useState } from 'react';

const Blogs = () => {
   document.title = "EC-House Blog";
   const [faq, setFaq] = useState([]);

   useEffect(() => {
      fetch('http://localhost:5000/blog')
         .then(res => res.json())
         .then(data => setFaq(data));
   }, []);

   let ques = 0;

   return (
      <div className='blog__section py-5' style={{ minHeight: "90vh" }}>
         <h2 className="section_title">Frequently Asked <span>Question</span></h2>
         <div className="container mt-5">

            <div className="row">
               {
                  faq.map(items => {
                     const { question, answer, _id } = items;
                     return (
                        <div className="col-lg-8 mx-auto card_main mb-4" key={_id}>
                           <article>
                              <strong>Q-{++ques}. {question}</strong>
                              <p className='ps-3 mt-3'>{answer}</p>
                           </article>
                        </div>
                     )
                  })
               }
            </div>
         </div>
      </div>
   );
};

export default Blogs;