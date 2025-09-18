import HeroImageContainer from "./HeroImageContainer"
import HeroTextContainer from "./HeroTextContainer"

const Hero = () => {
    return (
        <section className="relative bg-gradient-to-r from-orange-50 to-teal-50 py-20">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* grid-cols-1:Mobilde yukarıdadan aşağıya tek kolon
               lg:grid-cols-2:Large ekranlarda 2 kolon
               gap-12:Kolonlar arası boşluk
               items-center:İçerikleri dikeyde ortalar */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <HeroTextContainer />
                    <HeroImageContainer />
                </div>


            </div>

        </section>
    )
}

export default Hero   