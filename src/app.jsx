import React, { Component } from 'react'
import "./style.css"

export default class App extends Component {
    state = {
        inpval: '',
        array: [],
        date: '',
        mint: '',
        inpvaal2: ''
    }
    handlevalue = (e) => {
        this.setState({ inpval: e.target.value })

    }
    onsubmit = () => {
        var inpval2 = this.state.inpval
        // console.log(inpval2, "input value");
        if (!inpval2) {
            alert(" input value is empty")
        }
        else {
            var obj = { name: this.state.inpval, toggle: false }
            let list = this.state.array;
            list.push(obj)
            // console.log(list);
            this.setState({
                array: list,
                inpval: ''
            })
            // console.log(this.state.array.name);
        }
    }
    edit = ((i) => {
        // console.log(i);
        var list2 = this.state.array
        // console.log(list2);
        list2[i].toggle = true
        this.setState({
            array: list2
        })

    })
    btndel = ((i) => {
        // console.log(i);
        const getarray = this.state.array
        getarray.splice(i, 1)
        this.setState({
            array: getarray
        })

    })
    formf = (e) => {
        e.preventDefault()
        const getdate = new Date()
        const gettime1 = getdate.getHours()
        const gettime2 = getdate.getMinutes()
        this.setState({
            date: gettime1,
            mint: gettime2
        })
        // console.log(this.state.date);
    }
    shiftup = ((i) => {
        var array2 = this.state.array
        var arrayindex = array2[i]
        if (i !== 0) {
            array2[i] = array2[i - 1]
            array2[i - 1] = arrayindex
            this.setState({ array: array2 })
        }
        else {
            alert('this value is already overup')
        }



        // console.log(index);
    })
    shitdown = ((i) => {
        // console.log(i);
        var array3 = this.state.array
        var arrayindex3 = array3[i]
        if (i < array3.length - 1) {
            array3[i] = array3[i + 1]
            array3[i + 1] = arrayindex3
            this.setState({ array: array3 })
        }
        else {
            alert("this value is already overdown")
        }





    })
    inpvaal2 = ((e) => {
        var inpvaal21 = e.target.value
        this.setState({
            inpvaal2: inpvaal21
        })

    })
    update = ((i) => {
        var oldarray = this.state.array
        oldarray[i].name = this.state.inpvaal2
        oldarray[i].toggle = false
        this.setState({
            array: oldarray
        })


    })
    cancel = ((i) => {
        var oldarray = this.state.array
        oldarray[i].toggle = false
        this.setState({
            array: oldarray
        })
    })
    render() {
        const Filterdata = this.state.array.map((e, i) => {
            return <tr>
                <>
                    <th scope="row">{i}</th>
                    <td>{e.toggle == true ? <><input type="text" onChange={this.inpvaal2} className="inp2" defaultValue={e.name} name="" id="" /><button className="btn btn-primary mx-5" onClick={() => this.update(i)}>update</button>
                        <button className="btn btn-primary mx-3" onClick={() => this.cancel(i)}>cancel</button></> : e.name}</td>
                    <td><button className="btn btn-primary" onClick={() => this.btndel(i)}>delete</button></td>
                    <td><button className="btn btn-primary" onClick={() => this.edit(i)}>Edit</button></td>
                    <td><button onClick={() => this.shiftup(i)} className="btn btn-primary">shiftUp</button></td>
                    <td><button onClick={() => this.shitdown(i)} className="btn btn-primary">shiftdown</button></td>
                    <td>{this.state.date}:{this.state.mint}</td>
                </>
            </tr>
        })
        return (
            <div className="main">

                <form action="" onSubmit={this.formf} className="form">
                    <input className="input1" onChange={this.handlevalue} type="text" value={this.state.inpval} placeholder="Enter the Name" />
                    <button onClick={this.onsubmit} className="btn btn-info ml-5">submit</button>

                </form>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Delete</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Shiftup</th>
                            <th scope="col">shiftdown</th>
                            <th scope="col">time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Filterdata}
                    </tbody>
                </table>

            </div>
        )
    }
}
