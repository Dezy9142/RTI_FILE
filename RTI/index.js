const modal1 = document.querySelector(".modal1");
const modal2 = document.querySelector(".modal2");
const overlay = document.querySelector(".overlay");

//   Modal open function
function openModal1 ()  {
  // console.log("Modal is Open");
  modal1.classList.add("active");
 
  overlay.classList.add("overlayactive");
};

// Modal close function
const closeModal1 = () => {
  modal1.classList.remove("active");
  
  overlay.classList.remove("overlayactive");
};
function openModal2 ()  {
    // console.log("Modal is Open");
    
    modal2.classList.add("active");
    overlay.classList.add("overlayactive");
  };
  
  // Modal close function
  const closeModal2 = () => {
   
    modal2.classList.remove("active");
    overlay.classList.remove("overlayactive");
  };

// const openModal= ()=>  == function openModal()   same to same h but syntax me diffrent h