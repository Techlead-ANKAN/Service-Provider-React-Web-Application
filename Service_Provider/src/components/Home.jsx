import React from "react"
import { useState } from "react"
import "./Home.css"


function Home() {

    const [addipvisible, setipvisibility] = useState(false);

    const [del_statement, setdelstatement] = useState(false);

    const [update_visible, setupdatevisible] = useState(false);

    const [nextId, setNextId] = useState(5);

    const [newService, setNewService] = useState({ id: nextId, name: "", desc: "", price: "" })

    function Add_btn() {
        setupdatevisible(false);
        setdelstatement(false);
        setipvisibility(true);
    }


    function Add_Service() {
        let name = document.getElementsByClassName("name")[0];
        let desc = document.getElementsByClassName("desc")[0];
        let price = document.getElementsByClassName("price")[0];

        const row = document.getElementsByClassName("row")[0];


        setNewService({
            id: nextId,
            name: name.value,
            desc: desc.value,
            price: price.value
        })



        let row_ele = document.getElementsByClassName("row")[0];

        let new_service = document.createElement("div");
        new_service.setAttribute("class", "service");

        let name_price = document.createElement("div");
        name_price.setAttribute("class", "name_price");
        let id = document.createElement("p");
        id.innerText = nextId;
        name_price.appendChild(id);
        let p1 = document.createElement("p");
        p1.textContent = name.value;
        name_price.appendChild(p1);
        let p2 = document.createElement("p");
        p2.textContent = price.value + "/-";
        name_price.appendChild(p2);


        let description = document.createElement("div");
        description.setAttribute("class", "description");
        let text_ele = document.createElement("textarea");
        text_ele.value = desc.value;
        description.appendChild(text_ele);


        new_service.appendChild(name_price);
        new_service.appendChild(description);

        row_ele.appendChild(new_service);


        setNextId(
            nextId + 1
        );

        setipvisibility(false);

    }

    function Update_Service() {
        let name = document.getElementsByClassName("name")[0];
        let desc = document.getElementsByClassName("desc")[0];
        let price = document.getElementsByClassName("price")[0];
        let id = document.getElementsByClassName("id")[0];

        const rowContainer = document.querySelector(".row");


        let ele = rowContainer.children[id.value - 1];
        ele.children[0].children[1].textContent = name.value;
        ele.children[0].children[2].textContent = price.value + "/-";
        ele.children[1].children[0].value = desc.value;
    }



    function Update_btn() {
        setdelstatement(false);
        setipvisibility(false);
        setupdatevisible(true);
    }

    function Del_btn() {
        setupdatevisible(false);
        setipvisibility(false);
        setdelstatement(true);

        const rowContainer = document.querySelector(".row");

        rowContainer.addEventListener('click', event => {
            if (event.target.classList.contains("service")) {
                event.target.remove(); // Remove the service container

                // Update the service IDs of the remaining services
                const services = rowContainer.children;
                for (let i = 0; i < services.length; i++) {
                    const serviceId = services[i].children[0].children[0];
                    serviceId.textContent = i + 1;
                }

                setNextId(services.length + 1);
            }
        });
    }



    return (
        <>

            <div class="home">
                <button class="add btn" onClick={Add_btn}>Add Services</button>
                <button class="delete btn" onClick={Del_btn}>Delete Services</button>
                <button class="update btn" onClick={Update_btn}>Update Services</button>
            </div>


            <div class="services">

                {addipvisible ? (
                    <div class="add_ip" >
                        <label>Name: </label>
                        <input class="name" type="text" placeholder="Enter Service name here" />
                        <label>Desc: </label>
                        <input class="desc" type="text" placeholder="Enter Service description here" />
                        <label>Price: </label>
                        <input class="price" type="text" placeholder="Enter Service price here" />
                        <button class="add_btn" onClick={Add_Service}>Add</button>
                    </div>
                ) : null}

                {del_statement ? (
                    <div class="del_line" >
                        Select Services to delete
                    </div>
                ) : null}


                {update_visible ? (
                    <div class="update_ip" >
                        <label>Id: </label>
                        <input class="id" type="text" placeholder="Service id" />
                        <label>New Name: </label>
                        <input class="name" type="text" placeholder="Enter Service name here" />
                        <label>New Desc: </label>
                        <input class="desc" type="text" placeholder="Enter Service description here" />
                        <label>New Price: </label>
                        <input class="price" type="text" placeholder="Enter Service price here" />
                        <button class="update_btn" onClick={Update_Service}>Update</button>
                    </div>
                ) : null}

                <div className="row">
                    <div className="service">
                        <div className="name_price">
                            <p>1</p>
                            <p>Thyroxine (T4) Test</p>
                            <p>500/-</p>
                        </div>
                        <div className="description">
                            <textarea name="" id="" readOnly>A thyroxine test is a blood test that helps diagnose thyroid conditions. The thyroid is a small, butterfly-shaped gland at the base of your throat. Your thyroid makes hormones that control the way your body uses energy. These hormones affect your weight, heart, body temperature, muscle strength, and even your mood. In children, thyroid hormones affect growth, too. Thyroxine, also known as T4, is a type of thyroid hormone. A T4 test measures the level of T4 in your blood. Too much or too little T4 can be a sign of thyroid disease.</textarea>
                        </div>
                    </div>

                    <div className="service">
                        <div className="name_price">
                            <p>2</p>
                            <p>Uric Acid Test</p>
                            <p>200/-</p>
                        </div>
                        <div className="description">
                            <textarea name="" id="" readOnly>This test measures the amount of uric acid in a sample of your blood or urine (pee). Uric acid is a normal waste product that your body makes when it breaks down chemicals called purines. Purines come from your cells when they die. Purines are also found in many foods and beverages. Most uric acid dissolves in your blood. Your kidneys filter the uric acid out of your blood, and it leaves your body in your urine. If uric acid builds up in your blood, it can form needle-shaped crystals in and around your joints. This condition is called gout.</textarea>
                        </div>
                    </div>

                    <div className="service">
                        <div className="name_price">
                            <p>3</p>
                            <p>Laproscopy</p>
                            <p>8000/-</p>
                        </div>
                        <div className="description">
                            <textarea name="" id="" readOnly>A laparoscopy is a type of surgery that lets a surgeon look inside your body without making a large incision (cut). It's used to help diagnose and sometimes treat conditions that develop in your belly or pelvis. To do a laparoscopy, a surgeon makes a small cut near your belly button that's usually a half-inch long or less. The surgeon inserts a long, thin tube with a camera through the cut and into your body. This tube is called a laparoscope. The camera sends images from inside your body to a video monitor. This allows the surgeon to see inside your body. The surgeon may make one or two other small cuts in your belly for inserting special surgical tools into your body. Using these tools, the surgeon can remove samples of tissue to check for signs of disease (a biopsy).</textarea>
                        </div>
                    </div>

                    <div className="service">
                        <div className="name_price">
                            <p>4</p>
                            <p>Food Allergy Test</p>
                            <p>6000/-</p>
                        </div>
                        <div className="description">
                            <textarea name="" id="" readOnly>A food allergy happens when your immune system - your body's defense against germs - overreacts to a certain food as if it was harmful. If you have symptoms after eating certain foods, food allergy testing can help find out if your symptoms are caused by an allergic reaction to those foods. And it's important to find out because allergic reactions to food can be serious. Most food allergy symptoms are mild and include skin rashes and abdominal (belly) pain. But sometimes, symptoms quickly develop into a life-threatening allergic reaction called anaphylaxis, or anaphylactic shock. Anaphylaxis is a medical emergency that may affect your whole body, including your breathing. And there's no way to predict when an allergic reaction may change from mild to serious.</textarea>
                        </div>
                    </div>


                </div>


            </div>

        </>
    );
}

export default Home;

