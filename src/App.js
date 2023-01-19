import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { Routes, Route, useLocation, Navigate, Outlet, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Login from "./Auth/Login";
import { ar_loginUser, ar_logoutUser } from "./Redux/Actions/AuthActions";
import MyNavbar from "./AppLayout/MyNavbar";
import AppLayout from "./AppLayout/AppLayout";
import { AiFillHome } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillUpCircle } from "react-icons/ai";
import MyPortal from "./Components/MyPortal";
import FloorNine from "./Components/FloorNine";
import FloorTen from "./Components/FloorTen";
import { Footer } from "antd/lib/layout/layout";
import Panel from "./Components/Panel";
import AcController from "./Components/AcController";
import Reports from "./Components/Reports";
import DemoCard from "./Components/DemoCard";
import Json from "./Components/Json";
import AcController10 from "./Components/AcController10";
import Animation from "./Components/Animation";
import Dashboard from "./Components/Dashboard";
import ServiceFile from "./Components/ServiceFile";

function App() {
    const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();
	const authReducer = useSelector(state => state.authReducer);
	let location = useLocation();

	const validateToken = () => {
		setLoading(true);
        if (localStorage.token) {
            const token = localStorage.getItem("token");
            const decoded = jwt_decode(token);
            const currentTime = Date.now() / 1000; // to get in milliseconds
            if (currentTime <= decoded.exp) {
				const data = {
                    isAuthenticated: true,
					user: {
						userId: decoded.userid,
						username: decoded.username,
					},
                };
                dispatch(ar_loginUser(data));
            }
        }
		dispatch(ar_loginUser({ isAuthenticated: true, user: {} }));  // Uncomment this line for testing
        setLoading(false);
	}
	
    useEffect(() => {
		validateToken();
    }, []);

	const menuItems = [
        {
            key: "dashboard",
            label: (
                <Link to={`/dashboard`}>
                    Dashboard
                </Link>
            ),
            icon: <AiFillHome />,

            search: "dashboard",
            pathname: `/dashboard`,
            name: "Dashboard",
        },

        {
            key: "Floor9",
            label: (
                <Link to={`/Floor9`}>
                    Floor 9
                </Link>
            ),
            icon: <AiFillMinusCircle />,

            search: "dashboard",
            pathname: `/dashboard`,
            name: "Dashboard",
        },
        {
            key: "Floor10",
            label: (
                <Link to={`/Floor10`}>
                    Floor 10
                </Link>
            ),
            icon: <AiFillUpCircle />,

            search: "dashboard",
            pathname: `/dashboard`,
            name: "Dashboard",
        },
      
       
        {
            key: "reports",
            label: (
                <Link to={`/reports`}>
                    Reports
                </Link>
            ),
            icon: <AiFillUpCircle />,

            search: "dashboard",
            pathname: `/dashboard`,
            name: "Dashboard",
        },
       
       
       
    ];


    return (
		<div className="App">
			<Routes>
				<Route path="/login" element={<Login />} >
					<Route path="/login/aa" element={<MyNavbar />} />
				</Route>
		
				{/* 
					Validate the token first.
					Till the token is being validated, show the loading screen.
					After that loading will be false, hence check if the validation is successful or not.
					If successful, then move forward.
					Else, naviate to the login page.
				*/}
				<Route 
					path="*" 
					element={
						loading ? <div>Loading...</div> 
							: authReducer.isAuthenticated 
								? 
								<>
									<AppLayout menuItems={menuItems} />
								</>
								: <Navigate 
									to="/login" 
									replace={true} 
									state={{ from: location.pathname }} 
								/>
					} 
				>

					{/* All Authenticated Routes here ............ */}
					<Route path="abc" element={
						<>
							<h1>/abc Page</h1>
							<MyPortal id="navbar-portal">ABC Page | Shlok OP</MyPortal>
						</>
					} />
				                    <Route path="dashboard" element={<><Dashboard/><ServiceFile/></>} /> 

                    <Route path="Floor9" element={<FloorNine/>} > 

                      
                     </Route>
                     <Route path="Floor10" element={<FloorTen/>} >  
                     
                    </Route>
                  
                     <Route path="Floor9/accontrol9" element={ <AcController/>  }/> 
                     <Route path="Floor10/accontrol10" element={ <AcController10/>  }/> 
                

               
                    <Route path="reports" element={<Reports/>} />

                    <Route  path="Demo" element={<DemoCard/>}/>
                    <Route  path="Json" element={<Json/>}/>
                    <Route  path="3d" element={<Animation/> }/>


                    
                   
                   
				</Route>
                    
			</Routes>
          
		</div>
	)
}

export default App;
