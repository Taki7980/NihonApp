
import Container from "@/components/ReuseableComp/Container";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";


const Footer = () => {
    return (
        <Container Class="px-10 py-20">
            <div className="text-center flex justify-around space-x-20 text-black">
                <div className="text-xl">
                    ©2024 Weblifi, Inc. All rights reserved.
                </div>
                <div>
                    Terms & Conditions
                </div>
                <div className="flex space-x-2 flex-col md:flex-row gap-3 item-center justify-center align-centet text-center">

                    <Twitter className="h-6 w-6 text-black" />


                    <Linkedin className="h-6 w-6 text-black" />


                    <Instagram className="h-6 w-6 text-black" />


                    <Facebook className="h-6 w-6 text-black" />


                </div>


            </div>
        </Container>
    );
}

export default Footer;