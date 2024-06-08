import { ServicesCard } from '@/components/services-card/services-card'

export default function ServicesPage() {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className='container mx-auto'>
        <ServicesCard />
      </div>
    </section>
  )
}
