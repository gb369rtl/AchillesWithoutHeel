// import React, { useEffect } from "react";
// import { useContext, useState } from "react";
// import { Context } from "../../../main";
// import { Navigate } from "react-router-dom";
// import "./arcadeMain.css";
// import sud from "./images/sud.png";
// import word from "./images/word.png";
// import flip from "./images/flip.png";
// import tic from "./images/tic.avif";
// // import i5 from "./images/5.png";
// import { FaStar } from "react-icons/fa";  //<FaStar icon={FaStar} size={50} color="FEC53A"/>
// import { FaStarHalfAlt } from "react-icons/fa";



// const Arcade = () => {
//   const { isAuthorized } = useContext(Context);
//   const [showPreview, setShowPreview] = useState(false);
//   const [activePreview, setActivePreview] = useState(null);

//   useEffect(() => {
//       const productClickHandler = (product) => {
//           setShowPreview(true);
//           const name = product.getAttribute('data-name');
//           const previews = document.querySelectorAll('.products-preview .preview');
//           previews.forEach(preview => {
//               const target = preview.getAttribute('data-target');
//               if (name === target) {
//                   preview.classList.add('active');
//                   setActivePreview(preview);
//               }
//           });
//       };

//       const closePreviewHandler = () => {
//           if (activePreview) {
//               activePreview.classList.remove('active');
//               setShowPreview(false);
//           }
//       };

//       document.querySelectorAll('.products-arcadeMain .product').forEach(product => {
//           product.addEventListener('click', () => productClickHandler(product));
//       });

//       document.querySelectorAll('.products-preview .preview .fa-times').forEach(close => {
//           close.addEventListener('click', closePreviewHandler);
//       });

//       return () => {
//           document.querySelectorAll('.products-arcadeMain .product').forEach(product => {
//               product.removeEventListener('click', () => productClickHandler(product));
//           });

//           document.querySelectorAll('.products-preview .preview .fa-times').forEach(close => {
//               close.removeEventListener('click', closePreviewHandler);
//           });
//       };
//   }, [activePreview]);

//   if (!isAuthorized) {
//       return <Navigate to={"/login"} />;
//   }

//     return (
//       <>
//           <div className="arcadeMain">
//             <h3 className="title"> ARCADE GAMES </h3>
//             <div className="products-arcadeMain">

//               <div className="product" data-name="p-1">
//                   <img src={word} alt="" />
//                   <h3>WORDLE</h3>
//               </div>

//               <div className="product" data-name="p-2">
//                   <img src={sud} alt="" />
//                   <h3>SUDOKU</h3>
//               </div>

//               <div className="product" data-name="p-3">
//                   <img src={flip} alt="" />
//                   <h3>FLIPCARD</h3>
//               </div>

//               <div className="product" data-name="p-4">
//                   <img src={tic} alt="" />
//                   <h3>TIC TAC TOE</h3>
//               </div>
//             </div>

//             </div>

//             <div className="products-preview">

//             <div className="preview" data-target="p-1">
//               {/* <i className="fas fa-times"></i> */}
//               <img src={word} alt="" />
//               <h3>WORDLE</h3>
//               <div className="stars">
//                   <FaStar size={22} color="#FEC53A"/>
//                   <FaStar size={22} color="#FEC53A"/>
//                   <FaStar size={22} color="#FEC53A"/>
//                   <FaStar size={22} color="#FEC53A"/>
//                   <FaStarHalfAlt size={22} color="#FEC53A"/>
//                   <span>( 250 )</span>
//               </div>
//               <p>Wordle is a browser-based word guessing game</p>
//               <div className="buttons">
//                   <a href="https://oswinrozario.github.io/wordle-arcade/" className="buy">PLAY NOW</a>
//               </div>
//             </div>

//             <div className="preview" data-target="p-2">
//               {/* <i className="fas fa-times"></i> */}
//               <img src={sud} alt="" />
//               <h3>SUDOKU</h3>
//               <div className="stars">
//                   <FaStar size={22} color="#FEC53A"/>
//                   <FaStar size={22} color="#FEC53A"/>
//                   <FaStar size={22} color="#FEC53A"/>
//                   <FaStar size={22} color="#FEC53A"/>
//                   <FaStarHalfAlt size={22} color="#FEC53A"/>
//                   <span>( 190 )</span>
//               </div>
//               <p>Sudoku is a logic-based, combinatorial number-placement puzzle.</p>
//               <div className="buttons">
//                   <a href="../sudoko-arcade-main/index.html" className="buy">PLAY NOW</a>
//               </div>
//             </div>

//             <div className="preview" data-target="p-3">
//               {/* <i className="fas fa-times"></i> */}
//               <img src={flip} alt="" />
//               <h3>FLIPCARD</h3>
//               <div className="stars">
//                   <FaStar size={22} color="#FEC53A"/>
//                   <FaStar size={22} color="#FEC53A"/>
//                   <FaStar size={22} color="#FEC53A"/>
//                   <FaStar size={22} color="#FEC53A"/>
//                   <FaStarHalfAlt size={22} color="#FEC53A"/>
//                   <span>( 378 )</span>
//               </div>
//               <p>Flipcard is a timed card memory game.</p>
//               <div className="buttons">
//                   <a href="../flipcard-arcade-main/index.html" className="buy">PLAY NOW</a>
//               </div>
//             </div>

//             <div className="preview" data-target="p-4">
//               {/* <i className="fas fa-times"></i> */}
//               <img src={tic} alt="" />
//               <h3>TIC TAC TOE</h3>
//               <div className="stars">
//                   <FaStar size={22} color="#FEC53A"/>
//                   <FaStar size={22} color="#FEC53A"/>
//                   <FaStar size={22} color="#FEC53A"/>
//                   <FaStar size={22} color="#FEC53A"/>
//                   <FaStarHalfAlt size={22} color="#FEC53A"/>
//                   <span>( 1034 )</span>
//               </div>
//               <p>Tic-tac-toe (American English), noughts and crosses (Commonwealth English), or Xs and Os.</p>
//               <div className="buttons">
//                   <a href="https://tictactoe-by-mitansh.netlify.app/" className="buy">PLAY NOW</a>
//               </div>
//             </div>

//             {/* <div className="preview" data-target="p-5">
//               <i className="fas fa-times"></i>
//               <img src={i5} alt="" />
//               <h3>organic broccoli</h3>
//               <div className="stars">
//                     <FaStar icon={FaStar} size={22} color="FEC53A"/>
//                     <FaStar icon={FaStar} size={22} color="FEC53A"/>
//                     <FaStar icon={FaStar} size={22} color="FEC53A"/>
//                     <FaStar icon={FaStar} size={22} color="FEC53A"/>
//                     <FaStarHalfAlt icon={FaStarHalfAlt} size={22} color="FEC53A"/>
//                   <span>( 250 )</span>
//               </div>
//               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem.</p>
//               <div className="price">$2.00</div>
//               <div className="buttons">
//                   <a href="#" className="buy">buy now</a>
//                   <a href="#" className="cart">add to cart</a>
//               </div>
//             </div>

//             <div className="preview" data-target="p-6">
//               <i className="fas fa-times"></i>
//               <img src={i6} alt="" />
//               <h3>organic potatoes</h3>
//               <div className="stars">
//                     <FaStar icon={FaStar} size={22} color="FEC53A"/>
//                     <FaStar icon={FaStar} size={22} color="FEC53A"/>
//                     <FaStar icon={FaStar} size={22} color="FEC53A"/>
//                     <FaStar icon={FaStar} size={22} color="FEC53A"/>
//                     <FaStarHalfAlt icon={FaStarHalfAlt} size={22} color="FEC53A"/>
//                   <span>( 250 )</span>
//               </div>
//               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem.</p>
//               <div className="price">$2.00</div>
//               <div className="buttons">
//                   <a href="#" className="buy">buy now</a>
//                   <a href="#" className="cart">add to cart</a>
//               </div>
//             </div> */}

//             </div>
//             {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" /> */}
//       </>
//     );
//   };
  
//   export default Arcade;
  

import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { Context } from "../../../main";
import { Navigate } from "react-router";

const Arcade = () => {};
export default Arcade;