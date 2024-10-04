
const Footer = ()=>{
     const footerLinks = "Will be provided"
     return (
        <div>
            <section className="bg-">
                <article>
                    <a href="#top">Back to top</a>
                </article>
            </section>
            <section className="grid grid-cols-4 gap-5 pt-5 px-20">
                <article className="grid grid-flow-row gap-2">
                    <h2 className="font-bold">Get to Know us</h2>
                    <a href="">Careers</a>
                    <a href="">Blog</a>
                    <a href="">About Amazon</a>
                    <a href="">Investor Relations</a>
                    <a href="">Amazon Devices</a>
                    <a href="">Amazon Science</a>
                </article>
                <article className="grid grid-flow-row gap-2">
                    <h2 className="font-bold">Make Money With Us</h2>
                    <a href="">Sell products on Amazon</a>
                    <a href="">Sell on Amazon business</a>
                    <a href="">Sell apps on Amazon</a>
                    <a href="">Become an affiliate</a>
                    <a href="">Advertise your products</a>
                    <a href="">Self-Publish with Us</a>
                    <a href="">Host an Amazon Hub</a>
                    <a href="">See More Make money with Us</a>
                </article>
                <article className="grid grid-flow-row gap-2">
                    <h2 className="font-bold">Amazon Payment Products</h2>
                    <a href="">Amazon Business Card</a>
                    <a href="">Shop with Points</a>
                    <a href="">Reload Your Balance</a>
                    <a href="">Amazon Currency Converter</a>
                </article>
                <article className="grid grid-flow-row gap-2">
                    <h2 className="font-bold">Let Us Help You</h2>
                    <a href="">Amazon and COVID-19</a>
                    <a href="">Your Account</a>
                    <a href="">Your Orders</a>
                    <a href="">Returns & Replacements</a>
                    <a href="">Shipping rates and policies</a>
                    <a href="">Manage Your Content and Devices</a>
                    <a href="">Help</a>
                </article>
            </section>
            <section className="flex gap-8 px-40">
            <h2>amazon</h2>
                <article className="flex gap-5">
                    <input type="text" placeholder="English" className="bg-white w-40" />
                    <input type="text" placeholder="USD-U.S.Dollar" className="bg-white w-40 text-black " />
                    <input type="text" placeholder="United States" className="bg-white w-40 " />
                    
                </article>
            </section>
            <section>
                <article>
                    <h2>Get to Know us</h2>
                    <a href="">Careers</a>
                </article>
            </section>
            <h2>This is a footer</h2>
        </div>
     )
}

export default Footer;