const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className=' bg-slate-800 text-white'>
            <div className='grid grid-cols-3 gap-4 max-w-6xl mx-auto py-8'>
                <div className=''>
                    <img src={'.././kmine1.png'} className='w-10' alt='logo' />
                    <p className='py-2 text-sm text-slate-400'>
                        Kigali Goldchain Manager is a supply chain management system for Rwanda’s gold industry, designed to improve transparency and efficiency. It tracks the entire process from mining to trading, providing secure, real-time data and reducing fraud, making it an essential tool for miners, traders, and regulators.
                    </p>
                </div>
                <div className=''>
                    <h1 className="font-bold mb-3">Quick Links</h1>
                    <div className='flex flex-col'>
                        <a href='/'>Home</a>
                        <a href='/'>AboutUs</a>
                        <a href='/'>Services</a>
                        <a href='/'>Products</a>
                        <a href='/'>Contact</a>

                    </div>
                </div>
                <div className=''>
                    <h1>News Letter</h1>
                    <p>Send your email here you will get updates next.</p>
                    <div className="input-box">
                        <form action="#">
                            <input type="email" placeholder="Enter your email" />
                        </form>
                    </div>
                </div>
            </div>

            <div className='bg-slate-700 py-2 text-center'>
                <p>&copy; {currentYear} Kigali Goldchain Manager | All rights reserved.</p>

            </div>
        </div>
    )
}

export default Footer
