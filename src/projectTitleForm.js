export const TitleForm = () => {
  const titleInput = document.createElement("input");
  titleInput.classList.toggle("title-form");
  titleInput.addEventListener("keypress", (e) => {
    if(e.key === 'Enter')
    {
      e.target.innerHTML = titleInput.value;
      e.target.removeElement(titleInput);
    }
  });

  return titleInput;
};