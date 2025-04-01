{/* Bena Smith 03/28/2025
  This file returns html that shows a plotly plot of KNN on users and a description of how I carried out the project.
  */}
  
import React from 'react'


const ProjectExplained = () => { 
    return (
        <div className=" flex justify-center relative flex-col  bg-lime-950  items-center">
            <h1 className="text-3xl text-white flex justify-center items-center">
            Finding like-minded people
            </h1>
            <div className="w-full flex justify-center items-center flex-col">
                <h3 className="text-white text-lg pb-5 flex justify-center items-center"> 
                    <b> Click around on the graph to explore people and groups</b><br/><br/>
                </h3>

                <iframe 
                    src="/group_plot.html" 
                    width="100%"
                    height="600px"
                    title="Group Plot"
                    className="w-full flex justify-center items-center"
                />


            </div>
            <div className="flex-col justify-start text-left ">
                <h1 className="text-3xl text-white ">
                Procedure
                </h1>
                <h3 className="text-white text-lg pl-15 pr-7 pb-5"> 

                    <b>1. Create 300 simulated profiles of app users </b> with an "About Me", favorite music genres, <br/>
                    religion, and 1-5 ranks of outgoingness, outdoorsiness, and polictical correctness. ChatGPT created<br/>
                    these profiles so a lot of these simulated people have similar bios. With more intense prompting,<br/>
                    we can get more unique test profiles. Real users are more creative! <br/><br/>
                    

                    <b>2. Create sentence embeddings </b> of each person's characteristics using Open AI. These embeddings<br/>
                    are vectors that are closer together when the sentences are more similar. For example, if someone is<br/>
                    outgoing and likes EDM, their embedding will be very similar to somone who describes themself as an <br/>
                    extrovert who likes electronic music and far from an introvert who likes classical music. <br/><br/>
                    I created weights for each trait (favorite music, religion, etc) and found a weighted average of the <br/>
                    returned embeddings. With some research, we can decide which common traits are most important <br/>
                    that friends have in common or use this algorithm to weight 222 user "parameters" when users decide <br/>
                    what traits they value the most.<br/><br/>

                    <b>3. Make groups </b>using K Nearest Neighbors based on the closeness of the vector embeddings. Using<br/>
                    principal component analysis, the vector embeddings are reduced to 2 dimensions to view the graph <br/>
                    on the right in 2 dimensions. I made 10 groups of people. We can plan an event for each group!<br/><br/>


                    <b>Below, you can create a profile and users with similar vector embeddings/traits are recommended <br/>
                    along with some events that we want to plan for you ↓ </b>

                </h3>

            </div>

        </div>

      );
    };
  
  export default ProjectExplained