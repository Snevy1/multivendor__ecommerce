import { BsSearch } from "react-icons/bs";
import { BiSolidCartAdd } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { IoMenuSharp } from "react-icons/io5";

const Headersect = ()=>{
    return (

        <div className="font-serif">
            <div className='bg-bgheader pt-3 text-white  grid grid-cols-[20%_50%_30%] gap-3 pl-4'>
          
              <section className="grid grid-cols-2 gap-3">
              <article>
                 <h2 className="font-bold text-lg">amazon</h2>

             </article>

<article className="inline-flex"> 
  <div className="mt-4 mr-2">
  <CiLocationOn  className="text-2xl font-bold"/>
  </div>
 
  <p><span className="text-slate-200 text-xs">Deliver to</span> <br /><span className="text-sm font-bold">Kenya</span></p>
  
  </article>

              </section>
              <section >
              <article className="inline-flex bg-white w-full h-10 border-2 rounded-md"> 

                <input type="text" className="p-3 w-full" placeholder="Search Amazon"/>
                 <div className="bg-searchIconbg p-2 justify-items-center">
                 <BsSearch  className=" text-black text-2xl"/>
                  
                 </div>
                
              </article>

              </section>
              <section className="grid grid-cols-[40%_30%_30%] gap-4">
              <article> <p><span className="text-slate-200 text-xs">Hello,Nevil</span> <br /><span className="font-bold">Account & lists</span> </p></article>
              <article> <p><span className="text-slate-200 text-xs">Returns</span><br /><span className="font-bold"> & Orders</span></p></article>
              <article className="flex">
              <BiSolidCartAdd  className="text-3xl font-bold"/>
                 <p className="mt-2">Cart</p>
                 
                 </article>

              </section>


             
      </div>
      <div className="bg-bg2header text-white grid grid-cols-[5%_5%_60%_30%]  pb-3 pt-2 pl-4 pr-2">
        
          <section>
          <article  className="inline-flex gap-1">
            <IoMenuSharp className="text-3xl font-bold" />
          <p className="mt-1 font-bold text-base">All</p>
          
        </article>

          </section>
          <section>
          <article >
          <button className="bg-white text-black border-2 rounded-md p-1">Rufus</button>
        </article>
          </section>
        
        
          <section className="place-items-center grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-2">
        <article>
          <a>Today's deals</a>
        </article>
        <article>
          <a>Buy again</a>
        </article>
        <article>
          <a>Customer service</a>
        </article>
        <article>
          <a>Registry</a>
        </article>
        <article>
          <a>Gift cards</a>
        </article>
        <article>
          <a>Sell</a>
        </article>

        </section>
      

        
        <section className="text-end place-items-center">
          <h2>Shop the Gaming Store</h2>
        </section>
        
      </div>

        </div>
      

    )
}

export default Headersect;