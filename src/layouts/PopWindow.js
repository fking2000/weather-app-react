import styles from'./PopWindow.module.css';
function PopWindow(props){

    function onc(){props.ic(false)}
  
    return(

        <div  className={styles.PopWindow}>

            <h2>location saved!</h2>
            <button className={styles.buttonOk} onClick={onc}>Ok</button>
           
        </div>
    )
}
export default PopWindow;