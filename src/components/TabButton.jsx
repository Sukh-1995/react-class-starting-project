export default function TabButtton({children}) {

function handleClick(){
    console.log("Hello World!");
}

    return(
     <li>
        <button onClick={handleClick}>{children}</button>
        </li>
    );
}