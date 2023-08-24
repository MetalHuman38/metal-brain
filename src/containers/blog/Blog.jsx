import React from "react";
import { Article } from "../../components";
import { aboutimg, scimage1, blog02, brainimg, blog05 } from "./imports";
import "./Blog.scss";

const Blog = () => {
  return (
    <div className="metal__blog section__padding" id="Blog">
      <div className="metal__blog-heading">
        <h1 className="gradient-text">
          A Whirlwind of Progress: Chronicles of Our Eventful Journey.
        </h1>
      </div>
      <div className="metal__blog-container">
        <div className="metal__blog-container_groupA">
          <Article
            imgUrl={aboutimg}
            date="Aug 22, 2023"
            title="Unveiling the Technological Mind: A Glimpse into the Innovation at Metal-Brain"
          />
        </div>
        <div className="metal__blog-container_groupB">
          <Article
            imgUrl={scimage1}
            date="Aug 22, 2023"
            title="From Vision to Code: Crafting the Future with Metal-Brain's Tech Stack"
          />
          <Article
            imgUrl={blog02}
            date="Aug 22, 2023"
            title="Navigating the Startup Tech Landscape: Metal-Brain's Journey to Disruption"
          />
          <Article
            imgUrl={brainimg}
            date="Aug 22, 2023"
            title="Empowering Startups through Code: Metal-Brain's Recipe for Tech Success"
          />
          <Article
            imgUrl={blog05}
            date="Aug 22, 2023"
            title="Decoding Innovation: Unleashing the Potential of Metal-Brain's Tech Solutions"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
