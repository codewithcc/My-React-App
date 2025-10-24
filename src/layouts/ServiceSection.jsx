import ServiceCard from '../components/ServiceCard'

const ServiceSection = () => {
    const webServices = [
        "Responsive & modern design",
        "Fast & SEO-friendly",
        "Easy content management",
        "Secure hosting setup",
        "Scalable for growth"
    ]
    const appServices = [
        "Native apps built for speed & stability",
        "Clean, user-friendly interfaces",
        "Powerful API & backend integration",
        "Works even without internet",
        "Optimized for performance & growth"
    ]
    const iotServices = [
        "Connect devices with smart solutions",
        "Real-time monitoring & insights",
        "Custom hardware + software builds",
        "Secure cloud & mobile connectivity",
        "Automation that makes life easier"
    ]
    const webContactBtn = () => {
        alert("Web ServiceSection contact button clicked!")
    }
    const appContactBtn = () => {
        alert("App ServiceSection contact button clicked!")
    }
    const iotContactBtn = () => {
        alert("IoT ServiceSection contact button clicked!")
    }
    const moreBtn = () => {
        alert("More ServiceSection button clicked!")
    }
    return (
        <div className="flex flex-col items-center justify-center gap-8 w-full px-4 mt-32 cursor-default">
            <h2 className="font-bold text-5xl lg:text-7xl"><span className="text-yellow-500">S</span>ervices</h2>
            <div className="flex flex-col items-center justify-center gap-8 w-full lg:mt-12 lg:flex-row lg:gap-8">
                <ServiceCard 
                    title={"Web Development"}
                    items={webServices}
                    onClick={webContactBtn}
                />
                <ServiceCard 
                    title={"App Development"}
                    items={appServices}
                    onClick={appContactBtn}
                />
                <ServiceCard 
                    title={"IoT Development"}
                    items={iotServices}
                    onClick={iotContactBtn}
                />
            </div>
            <button 
                onClick={ moreBtn }
                className="w-[310px] text-center bg-black text-yellow-300 font-semibold text-xl rounded-xl py-3 lg:w-auto lg:text-3xl lg:px-12 lg:mt-6 cursor-pointer"
            >
                More Services
            </button>
        </div>
    )
}

export default ServiceSection