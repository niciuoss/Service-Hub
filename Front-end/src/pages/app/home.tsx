import { Helmet } from "react-helmet-async"
import bannerImage from "@/assets/banner.png"
import bannerImage1 from "@/assets/banner2.png"
import bannerImage2 from "@/assets/banner3.png"
import bannerImage3 from "@/assets/banner4.png"
import bannerImage4 from "@/assets/banner5.png"
import bannerImage5 from "@/assets/banner6.png"
import bannerImage6 from "@/assets/banner7.png"
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { FilterHome } from "@/components/filter-home"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function Home(){
  return (
    <div className="px-4 sm:px-6 lg:px-8">
        <Helmet title="Home"/>
        <div id="banner" className="mb-4">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1} 
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
              <div className="relative">
                <img src={bannerImage} alt="Banner 1" className="w-full h-auto" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <h2 className="text-2xl font-bold mb-2">Junte-se à comunidade ServiceHub</h2>
                  <h3 className="text-lg text-muted-foreground">Descubra uma variedade de serviços disponíveis para você!</h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <img src={bannerImage} alt="Banner 1" className="w-full h-auto" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <h2 className="text-2xl font-bold mb-2">Junte-se à comunidade ServiceHub</h2>
                  <h3 className="text-lg text-muted-foreground">Descubra uma variedade de serviços disponíveis para você!</h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <img src={bannerImage} alt="Banner 1" className="w-full h-auto" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <h2 className="text-2xl font-bold mb-2">Junte-se à comunidade ServiceHub</h2>
                  <h3 className="text-lg text-muted-foreground">Descubra uma variedade de serviços disponíveis para você!</h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <img src={bannerImage} alt="Banner 1" className="w-full h-auto" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <h2 className="text-2xl font-bold mb-2">Junte-se à comunidade ServiceHub</h2>
                  <h3 className="text-lg text-muted-foreground">Descubra uma variedade de serviços disponíveis para você!</h3>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex justify-center pb-4">
          <FilterHome/>
        </div>

        <div id="featureService" className="pt-4">
          <h1 className="font-medium pb-2">Serviços em destaque</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="relative">
              <img src={bannerImage1} alt="Banner 1" className="w-full h-auto object-cover rounded-lg" />
              <Badge variant="secondary" className="absolute bottom-2 left-2">Consultoria</Badge>
            </Card>
            <div className="flex flex-col gap-4">
              <Card className="relative">
                <img src={bannerImage2} alt="Banner 2" className="w-full h-auto object-cover rounded-lg" />
                <Badge variant="secondary" className="absolute bottom-2 left-2">Escritório</Badge>
              </Card>
              <Card className="relative">
                <img src={bannerImage3} alt="Banner 3" className="w-full h-auto object-cover rounded-lg" />
                <Badge variant="secondary" className="absolute bottom-2 left-2">Eventos</Badge>
              </Card>
            </div>
            <Card className="relative">
              <img src={bannerImage4} alt="Banner 4" className="w-full h-auto object-cover rounded-lg" />
              <Badge variant="secondary" className="absolute bottom-2 left-2">Terapia</Badge>
            </Card>
            <div className="flex flex-col gap-4">
              <Card className="relative">
                <img src={bannerImage5} alt="Banner 5" className="w-full h-auto object-cover rounded-lg" />
                <Badge variant="secondary" className="absolute bottom-2 left-2">Escritório</Badge>
              </Card>
              <Card className="relative">
                <img src={bannerImage6} alt="Banner 6" className="w-full h-auto object-cover rounded-lg" />
                <Badge variant="secondary" className="absolute bottom-2 left-2">Eventos</Badge>
              </Card>
            </div>
          </div>
        </div>

        <div id="topRated" className="pt-4">
          <h1 className="font-medium pb-2">Serviços mais bem avaliados</h1>
          <Card className="relative w-[15rem] h-[15.5rem]">
            <img src={bannerImage1} alt="Banner 1" className="w-full h-full object-cover rounded-lg" />
            <Badge variant="secondary" className="absolute bottom-2 left-2">Escritório</Badge>
          </Card>
        </div>

        <div id="exclusiveDeals">

        </div>

        <footer></footer>

    </div>
  )
}
