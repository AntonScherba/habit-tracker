import { Link, Outlet } from "react-router";

export default function MainLayout() {
    return (
        <>
            MainLayout
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/messages">Messages (Dashboard)</Link>
                    </li>
                </ul>
            </nav>

            <hr />

            <Outlet />
        </>
    )
}
