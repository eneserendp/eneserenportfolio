'use client'

import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"

const Contact = () => {
    const handleSubmit = (e: any) => {
        e.preventDefault();
        
        // Form verilerini al
        const email = e.target.email.value;
        const subject = e.target.subject.value;
        const message = e.target.message.value;

        // mailto URL'sini oluştur
        const mailtoLink = `mailto:eneserendp@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${email}\n\n${message}`)}`;

        // Kullanıcıyı mailto bağlantısına yönlendir
        window.location.href = mailtoLink;
    }

    return (
        <section id="contact">
            <div className='grid grid-cols-1 md:grid-cols-2 my-10 gap-5 mt-12 md:mt-24'>
                <div className='col-span-1'>
                    <h5 className='text-mycolor-100 font-semibold mb-4 text-2xl'>Benimle İletişime Geç</h5>
                    <p className='text-base text-white'>
                        Projeleriniz, iş fırsatlarınız veya herhangi bir konuda benimle iletişime geçmekten çekinmeyin. Her türlü soru ve öneriniz için buradayım! 
                        
                    </p>
                    <br></br>
                    <p className='text-base text-white'>
                    Telefon Numarası : 507 167 06 43
                        
                    </p>
                    
                    
                    <div className='flex flex-row gap-4 mt-5'>
                        <a href="https://github.com/eneserendp" target="_blank" rel="noopener noreferrer">
                            <BsGithub className='h-10 w-10 text-white'/>
                        </a>
                        <a href="https://www.linkedin.com/in/enes-eren-demirpolat-3b1450220/" target="_blank" rel="noopener noreferrer">
                            <BsLinkedin className='h-10 w-10 text-white'/>
                        </a>
                    </div>
                </div>
                <div className='col-span-1'>
                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <div className="mb-6 text-white">
                            <Label>Email Adresiniz</Label>
                            <Input type="email" name="email" placeholder="Email" required className="bg-mycolor-600 mt-2" />
                        </div>
                        <div className="mb-6 text-white">
                            <Label>Başlık</Label>
                            <Input type="text" name="subject" placeholder="Subject" required className="bg-mycolor-600 mt-2" />
                        </div>
                        <div className="mb-6 text-white">
                            <Label>Mesaj</Label>
                            <Textarea name="message" className="bg-mycolor-600 mt-2" placeholder="Type your message here." required />
                        </div>
                        <Button type="submit">Gönder</Button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;
