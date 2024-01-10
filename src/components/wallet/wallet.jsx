import './wallet.css';
import React from "react";

export default function wallet() {
    return (
        <>
            <div className="wallet">
                <div className="chokoin">
                    <img src="/img/koin/chokoin.png" />
                    <span>0</span>
                </div>
                <div className="milkoin">
                    <img src="/img/koin/milkoin.png" />
                    <span>0</span>
                </div>
                <div className="teakoin">
                    <img src="/img/koin/teakoin.png" />
                    <span>0</span>
                </div>
            </div>
        </>
    );
}
