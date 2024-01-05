import BillDetail from "./BillDetail";


export function Dashboard(props) {
    return <div>
        <div onClick={props.removeAccessToken}>Logout</div>
        <BillDetail/>
    </div>
}