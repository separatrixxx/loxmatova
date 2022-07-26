import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import {FaTelegramPlane, FaWhatsapp, FaVk, FaHeart} from "react-icons/fa";

function Contacts () {
    return (
        <div className="scroll-smooth bg-white">
            <div id="first_div" className="flex flex-col lg:flex-row w-full bg-violet" onTouchStart={closeMenu}>
                <div className="w-full lg:w-1/2 bg-white p-10 lg:p-20 pt-20">
                    <div>
                        <h1 className="text-violet text-2xl lg:text-3xl contacts_1">Свяжитесь со мной</h1>
                        <p className="text-lg lg:text-xl text-neutral-800 mt-3 contacts_2">Если у вас появились вопросы, или вы хотите заказать фотосессию, пишите в социальных сетях:</p>
                        <div className="flex w-full justify-center mt-7 contacts_3">
                            <a href="https://vk.com/loxmatova" target="_blank" rel="noreferrer"  className="flex flex-row mx-7 text-3xl lg:text-4xl cursor-pointer text-neutral-800 hover:text-violet transition-colors duration-300 ease-in-out">
                                <FaVk />
                            </a>
                            <a href="https://t.me/+79107125791" target="_blank" rel="noreferrer"  className="flex flex-row mx-7 text-3xl lg:text-4xl cursor-pointer text-neutral-800 hover:text-violet transition-colors duration-300 ease-in-out">
                                <FaTelegramPlane />
                            </a>
                            <a href="https://wa.me/+79107125791" target="_blank" rel="noreferrer"  className="flex flex-row mx-7 text-3xl lg:text-4xl cursor-pointer text-neutral-800 hover:text-violet transition-colors duration-300 ease-in-out">
                                <FaWhatsapp />
                            </a>
                        </div>
                        <p className="text-lg lg:text-xl mt-7 contacts_4">Или отправьте сообщение через форму:</p>
                        <ContactForm />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center w-full lg:w-1/2 h-48 lg:h-screen bg-violet">
                    <h1 className="text-white text-xl lg:text-5xl font-bold">Спасибо, что выбрали меня!</h1>
                    <div className="mt-5 lg:mt-10">
                        <h1 className="text-white text-4xl lg:text-7xl font-bold absolute "><FaHeart /></h1>
                        <h1 className="text-white text-4xl lg:text-7xl font-bold animate-ping"><FaHeart /></h1>
                    </div>
                </div>
            </div>
            <Header />
            <Footer />
        </div>
    );
}

function closeMenu() {
    document.getElementById('close_menu').classList.add('hidden');
    document.getElementById('link_1').classList.add('hidden');
    document.getElementById('link_2').classList.add('hidden');
    document.getElementById('link_3').classList.add('hidden');
    document.getElementById('link_4').classList.add('hidden');
    document.getElementById('burger_menu').classList.remove('hidden');
}


export default Contacts;
