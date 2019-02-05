// import React, { Component } from "react"
import {hostAPI} from './config'
export async function Fetch(path, data={}) {
    try {
        // const pathAPI = path.split(" ");
        // let url = hostAPI + pathAPI[pathAPI.length-1]
        let { url, method } = await FetchAPI(path)
        console.log(url)
        const res = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
            },
            // method: pathAPI[0],
            method: method,
            body: JSON.stringify(data)
        });
        // console.log("Res", res);
        const datas = await res.json();
        // console.log(datas);
        return datas

    } catch (error) {
        console.log(error.message);
        return "error"
    }
}
export async function FetchAPI(path) {
    try {
        const pathAPI = path.split(" ");
        let url = hostAPI + pathAPI[pathAPI.length-1]
        let method = pathAPI[0]
        console.log('url', url)
        return await { method, url }

    } catch (error) {
        console.log(error.message);
        return "error"
    }
}

