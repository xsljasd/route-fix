import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Index() {
    return <h2>Home</h2>;
}

function Product() {
    return <h2>This is a page for product with ID:  </h2>;
}

function AppRouter() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/products/1">First Product</Link>
                        </li>
                        <li>
                            <Link to="/products/2">Second Product</Link>
                        </li>
                    </ul>
                </nav>

                <Route path="/" element={<Index />} />
                <Route path="/products/:id" element={<Product />} />
            </div>
        </Router>
    );
}

export default AppRouter;