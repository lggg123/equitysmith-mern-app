import axios from "axios";
import { useEffect, useState } from "react";
import "./sidebar.css"

export default function Sidebar() {
    const [cat, setCats ] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("./categories")
            setCats(res.data)
        }
        getCats();
    })
    return (
        <div className="sidebar">
            <Link to={`/?cat${c.name}`} className="link"></Link>
        </div>
    )
}