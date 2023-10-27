import React, {useState, useEffect} from 'react';
import DataTable from 'react-data-table-component';
import '../styles.css';



export default function BasicTabs() {

    const [data, setData] = useState([]);
    const [view, setView] = useState(0);

    const fetchData = async () => {

        try{
            const response = await fetch(`https://pl-database.onrender.com/seasonInformation`);
            const data = await response.json();
            setData(data);
        }
        catch(error){
            console.error('Error fetching players');
        }
        
    }

    useEffect(() => {
        fetchData('');
    }, []);

    const customStyles = {
        rows: {
            style: {
                fontSize: "0.7em",
                backgroundColor: "#dee2e6" // override the row height
            },
        },
        headCells: {
            style: {
                fontSize: "1em",
                backgroundColor: "#6c757d",
                color: "white"
            },
        },
        cells: {
            style: {
                
            },
        },
    };

    const columns = [
        {
            name: 'Club',
            selector: row => <a href='/'>{row.clubname}</a>,
        },
        {
            name: 'Wins',
            selector: row => parseInt(row.wins),
            sortable: true,
        },
        {
            name: 'Draws',
            selector: row => parseInt(row.draws),
            sortable: true,
        },
        {
            name: 'Losses',
            selector: row => parseInt(row.losses),
            sortable: true,
        },
        {
            name: 'GF',
            selector: row => parseInt(row.goalsScored),
            sortable: true,
        },
        {
            name: 'GA',
            selector: row => parseInt(row.goalsConceded),
            sortable: true,
        },
        {
            name: 'GD',
            selector: row => parseInt(row.goalDifference),
            sortable: true,
        },
        {
            name: 'Points',
            selector: row => parseInt(row.points),
            sortable: true,
        },
        {
            name: 'xG',
            selector: row => parseInt(row.totalXG),
            sortable: true,
        },
        {
            name: 'xGA',
            selector: row => parseInt(row.totalXGA),
            sortable: true,
        },
        
    ];


    function changeView(id){
        setView(id);
    }

    return (
        <div className='pl-season-info'>
            <div className='home-tabs'>
                <button className={view === 0 ? "active-tab" : ""} onClick={() => {changeView(0)}}>Overall</button>
                <button className={view === 1 ? "active-tab" : ""} onClick={() => {changeView(1)}}>Home</button>
                <button className={view === 2 ? "active-tab" : ""} onClick={() => {changeView(2)}}>Away</button>
            </div>
            {view === 0 && (
                <div style={{paddingTop:"2em"}}>{
                    data.length === 3 && (
                    <div className='pl-home-container'>
                        <div style={{flex:"1", overflow: "scroll"}}>
                            <DataTable 
                                columns={columns} 
                                data={data[0].sort((a, b) => b.points - a.points)} 
                                customStyles={customStyles}
                                highlightOnHover
                                responsive
                            />
                        </div>
                        <div style={{flex:"1"}}>5</div>
                    </div>
                    )
                }</div>)
            }
            {view === 1 && (
                <div style={{paddingTop:"2em"}}>{
                    data.length === 3 && (
                    <div className='pl-home-container'>
                        <div style={{flex:"1", overflow: "scroll"}}>
                            <DataTable 
                                columns={columns} 
                                data={data[1].sort((a, b) => b.points - a.points)} 
                                customStyles={customStyles}
                                highlightOnHover
                                responsive
                            />
                        </div>
                        <div style={{flex:"1"}}>5</div>
                    </div>
                    )
                }</div>)
            }
            {view === 2 && (
                <div style={{paddingTop:"2em"}}>{
                    data.length === 3 && (
                    <div className='pl-home-container'>
                        <div style={{flex:"1", overflow: "scroll"}}>
                            <DataTable 
                                columns={columns} 
                                data={data[2].sort((a, b) => b.points - a.points)} 
                                customStyles={customStyles}
                                highlightOnHover
                                responsive
                            />
                        </div>
                        <div style={{flex:"1"}}>5</div>
                    </div>
                    )
                }</div>)
            }
        </div>
    );
}