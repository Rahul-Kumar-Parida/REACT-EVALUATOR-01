import styles from "./BtnContainer.module.css";

const ButtonsContainer = ({ onButtonClick }) => {
  const ButtonNames = [
    "C",
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
    "/",
    ".",
    "0",
    "=",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {ButtonNames.map((buttonName) => (
        <button
          key={buttonName}
          onClick={()=>onButtonClick(buttonName)}
          className={styles.button}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
