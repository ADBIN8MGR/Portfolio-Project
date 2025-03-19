import { Outlet } from "react-router-dom"
import { toast } from "react-toastify"
const DashboardLayout = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default DashboardLayout
