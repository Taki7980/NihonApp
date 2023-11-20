
import Container from "@/components/ReuseableComp/Container";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";


const Footer = () => {
    return (
        <Container Class="px-20 py-20">
            <div className="text-center flex justify-around space-x-20 text-black">
                <div className="text-xl">
                    ©2024 Weblifi, Inc. All rights reserved.
                </div>
                <div>
                    Terms & Conditions
                </div>
                <div className="flex space-x-2">

                    <div className="bg-black p-2 rounded-full ">
                        <Twitter className="h-6 w-6 text-white" />

                    </div>
                    <div className="bg-black p-2 rounded-full">
                        <Linkedin className="h-6 w-6 text-white" />
                    </div>
                    <div className="bg-black p-2 rounded-full">
                        <Instagram className="h-6 w-6 text-white" />
                    </div>
                    <div className="bg-black p-2 rounded-full">
                        <Facebook className="h-6 w-6 text-white" />
                    </div>

                </div>


            </div>
        </Container>
    );
}

export default Footer;