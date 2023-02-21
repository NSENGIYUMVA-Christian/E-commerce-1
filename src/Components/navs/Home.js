
import Product from "../Products"
import data from "../Data"


export default function Home()
{
    // home content
   let para = `Welcome to IYAWE ART COLLECTION, where we offer a unique and exciting collection of locally crafted goods that are sure to delight and inspire. At our company, we believe that the best products are those that are made with care, attention to detail, and a deep respect for tradition. That's why we work with a hand-picked selection of skilled artisans who create one-of-a-kind items that reflect the rich history and culture of our community. From hand-crafted pottery to locally-sourced textiles, our collection is diverse and ever-evolving, with new pieces added regularly to keep things fresh and interesting. Whether you're looking for a one-of-a-kind gift for a loved one or a special treat for yourself, we're confident that you'll find something you love in our selection. At the heart of our company is a commitment to supporting and promoting the talents of our local artisans. By providing a platform for them to showcase their work, we're helping to preserve and celebrate the unique artistic traditions of our community. In addition to offering a wide range of beautifully crafted goods, we're also passionate about providing our customers with a truly exceptional shopping experience. Our friendly and knowledgeable staff are always on hand to answer any questions you may have, and we're committed to making your visit with us as enjoyable and memorable as possible. So whether you're a longtime fan of local crafts or you're just discovering the beauty and artistry of our region's creative talents, we invite you to explore our collection and discover something truly special. Thank you for choosing IYAWE ART COLLECTION, and we look forward to serving you soon.`

   // looping,maping through products data and giving Product components properties
    const product = data.map((p)=>{
        return <Product key={p.id} title={p.title} descr={p.descr}  size={p.size} available={p.available} image={p.img} />
    })
 // rendering Home and Product
 
    return (
        <div className="container-fluid bg-warning-subtle text-emphasis-warning">
        <h1>IYAWE ART COLLECTION</h1>
        <p className="fw-normal">{para}</p>
         <h2>Our products</h2>
        <div className="productContainer  ">
                    {product}
                </div>
                <p className="fw-normal">{para}</p>
    </div>  
      )
}


