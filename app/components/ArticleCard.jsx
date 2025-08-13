import React from "react";
import { Link } from "react-router-dom";

const stripHtmlAndTruncate = (htmlString, wordLimit = 30) => {
  // Create a temporary DOM element to parse HTML
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlString;

  // Extract plain text
  const plainText = tempDiv.textContent || tempDiv.innerText || "";

  // Truncate to wordLimit
  const words = plainText.trim().split(/\s+/);
  const truncated = words.slice(0, wordLimit).join(" ");
  return words.length > wordLimit ? truncated + "..." : truncated;
};

const ArticleCard = ({ img, title, desc, readMoreUrl }) => {
  return (
    <div className="articleWrap">
      <div className="content">
        {/* <img src={img} alt="article img" /> */}
        {/* <h2>{title}</h2> */}
        <h2>
          <Link to={readMoreUrl}>{title}</Link>
        </h2>
        <hr/>
        <p>{stripHtmlAndTruncate(desc)}</p>
      </div>
      <Link to={readMoreUrl}>Read article</Link>
    </div>
  );
};

export default ArticleCard;


// import React from "react";
// import { Link } from "react-router-dom";

// const ArticleCard = ({ img, title, desc, readMoreUrl }) => {
//   return (
//     <div className="articleWrap">
//       <div className="content">
//         <img src={img} alt="article img" />
//         <h2>{title}</h2>
//         <p>{desc}</p>
//       </div>
//       <Link to={readMoreUrl}>Read article</Link>
//     </div>
//   );
// };

// export default ArticleCard;
