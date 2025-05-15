export default function TabButtton({children,onSelect}) {



    return(
     <li>
        <button onClick={onSelect}>{children}</button>
        </li>
    );
}