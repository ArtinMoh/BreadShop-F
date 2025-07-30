// import React from 'react';

// export const stepper = () => {
//     const [step, setStep] = React.useState(0);

//     const pressed = () => {
//         setStep((prevStep) => prevStep + 1);
//         console.log(`Current step: ${step}`);
//     }

//     return <div>
//         <h1>Here is silly stepper: {step}</h1>
//         <button onClick={() => pressed()}>Press me</button>
//     </div>
// }

// export const firstFunction = () => {
//     return 1 + 5;
// }

// export const SecondFunction = () => {
//     return <div>
//         <h2>Welcome to Our Bread Shop</h2>
//     </div>
// }

// /** # Third function that uses SecondFunction
//  * 
//  * @param {string} name - Name of the title.
//  * @param {boolean} isEnabled - Whether the feature is enabled.
//  * 
//  * @example
//  * <ThirdFunction name="This is a simple header"/>
//  * @returns {JSX.Element}
//  */
// export const ThirdFunction = ({name, isEnabled}) => {
//     return (
//         <div>
//             <SecondFunction />
//             <p>Explore our wide range of artisanal breads.</p>
//         </div>
//     );
// }

// /** First method */
// // export default () => {
// //     console.error(firstFunction());

// //     return <div>
// //         <ThirdFunction />
// //     </div>
// // }

// /** Second method */

// const Tiler = () => {
//     console.error(firstFunction());

//     return <div>
//         <ThirdFunction />
//     </div>
// }

// export default Tiler;