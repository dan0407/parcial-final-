
// import styles from "./edits.css";
// import {
//   actualizarDatosUsuarioConImagen,
// } from "../../../utils/firebase";

// export class edit extends HTMLElement {
//   constructor() {
//     super();
//     this.attachShadow({ mode: "open" });
//   }

//   connectedCallback() {
//     this.render();
//   }

//   render() {
//     if (this.shadowRoot) {
//       this.shadowRoot.innerHTML = ` `;

//       // Create the general div
//       const general = document.createElement("div");
//       general.id = "general";

//       // Create the inputs div
//       const inputsDiv = document.createElement("div");
//       inputsDiv.id = "inputs";

//       const imglable = document.createElement("label");
//       imglable.textContent = "imagen";

//       const imgInput = document.createElement("input");
//       imgInput.type = "file";
//       imgInput.id = "file";

//       const namealbunLabeldos = document.createElement("label");
//       namealbunLabeldos.textContent = "namealbun";

//       const namealbunInputdos = document.createElement("input");
//       namealbunInputdos.type = "string";
//       namealbunLabeldos.id = "namealbun";

//       const authorLabel = document.createElement("label");
//       authorLabel.textContent = "author";

//       const authorInput = document.createElement("input");
//       authorInput.type = "sting";
//       authorInput.id = "author";

//       const priceLabel = document.createElement("label");
//       priceLabel.textContent = "price";

//       const priceInput = document.createElement("input");
//       priceInput.type = "number";
//       priceInput.id = "price";

//       const stockLabel = document.createElement("label");
//       stockLabel.textContent = "stock";

//       const stockInput = document.createElement("input");
//       stockInput.type = "number";
//       stockInput.id = "stock";

//       // Create the login button
//       const SAVE = document.createElement("button");
//       SAVE.classList.add("button");
//       SAVE.textContent = "SAVE";
//       SAVE.addEventListener("click", () => {
//         console.log(imgInput.files);
//         if (imgInput.files) {
//           if (imgInput.files?.length === 0) {
//               actualizarDatosUsuarioConImagen(
//                 imgInput.files[0],
//                 parseInt(namealbunInputdos.value),
//                 parseInt(authorInput.value),
//                 parseInt(priceInput.value),
//                 parseInt(stockInput.value)
//               );
         
//           } else {
//             ''
//           }
//         }
//       });
//       this.shadowRoot?.appendChild(SAVE);

//       // Add the general div to the document body
//       document.body.appendChild(general);
//       this.shadowRoot.appendChild(general);

//       inputsDiv.appendChild(imglable);
//       inputsDiv.appendChild(imgInput);
//       inputsDiv.appendChild(namealbunLabeldos);
//       inputsDiv.appendChild(namealbunLabeldos);
//       inputsDiv.appendChild(authorLabel);
//       inputsDiv.appendChild(authorInput);
//       inputsDiv.appendChild(priceLabel);
//       inputsDiv.appendChild(priceInput);
//       inputsDiv.appendChild(stockLabel);
//       inputsDiv.appendChild(stockInput);
//       inputsDiv.appendChild(SAVE);
//       general.appendChild(inputsDiv);
//     }

//     const cssProfile = this.ownerDocument.createElement("style");
//     cssProfile.innerHTML = styles;
//     this.shadowRoot?.appendChild(cssProfile);
//   }
// }

// customElements.define("my-edit", edit);
