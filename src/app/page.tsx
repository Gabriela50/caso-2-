import React from 'react';
import { Search, ShoppingBag, User, Heart, Star, Truck, Sparkles, Clock, Cake, Cookie, ArrowDownCircle } from 'lucide-react';

export default function DakingoBakery() {
  return (
    <div className="min-h-screen bg-[#f7ebe6] text-[#3d181a] font-sans pb-10 select-none">
      
      {/* 1. TOP NAVBAR */}
      <header className="bg-white sticky top-0 z-50 border-b border-rose-100 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-2 sm:gap-4">
          <div className="text-2xl sm:text-3xl font-black text-[#912328] tracking-tight">Dakingo</div>

          <div className="flex-1 max-w-[180px] sm:max-w-xs relative flex items-center">
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full bg-white border border-slate-300 rounded-full py-1 pl-7 pr-8 text-xs outline-none"
            />
            <Search className="w-3 h-3 text-slate-400 absolute left-2.5" />
            <button className="absolute right-0.5 bg-[#912328] text-white p-1 rounded-full">
              <User className="w-2.5 h-2.5" />
            </button>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 text-xs font-bold text-[#912328]">
            <ShoppingBag className="w-4 h-4 text-[#912328]" />
            <span className="text-slate-700 font-semibold text-[11px] sm:text-xs">Login/Signup</span>
          </div>
        </div>

        <nav className="bg-white border-t border-slate-100 overflow-x-auto">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between gap-4 sm:gap-5 text-xs font-bold text-slate-800 whitespace-nowrap">
            <div className="flex items-center gap-4 sm:gap-5">
              <a href="#">Cakes</a>
              <a href="#">Theme Cakes</a>
              <a href="#">Desserts</a>
              <a href="#">Birthday</a>
              <a href="#">Hampers</a>
              <a href="#">Anniversary</a>
              <a href="#">Occaions</a>
              <a href="#">Occasions</a>
            </div>
            <button className="bg-[#912328] text-white px-4 sm:px-5 py-1 rounded-full text-xs font-bold tracking-wider shrink-0">
              ORDER NOW
            </button>
          </div>
        </nav>
      </header>

      {/* 2. HERO BANNER */}
      <section className="bg-gradient-to-r from-[#7a1419] via-[#912328] to-[#b02b32] text-white py-8 sm:py-10 px-4 sm:px-8 relative overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
          
          <div className="relative shrink-0">
            <div className="w-52 h-52 sm:w-64 sm:h-64 rounded-full border-4 border-white/90 overflow-hidden shadow-2xl bg-white">
              <img 
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80" 
                alt="Decadent Chocolate Bliss"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1 text-center sm:text-left space-y-1 sm:space-y-2">
            <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight leading-none text-white drop-shadow">
              DECADENT<br />CHOCOLATE<br />BLISS!
            </h1>
            <p className="text-rose-100 text-sm sm:text-base italic font-serif">Satify Your Sweetest Cravings</p>
            <div className="inline-block bg-[#912328] text-white border border-white/40 px-3 py-1 rounded-2xl text-center shadow-md mt-1">
              <span className="text-[8px] uppercase block leading-none text-rose-200">Specid Offer!</span>
              <span className="text-xs font-extrabold uppercase">SAVE 20%</span>
            </div>
          </div>

          <div className="flex sm:flex-col gap-4 shrink-0">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-white/90 overflow-hidden shadow-md bg-white">
              <img 
                src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&auto=format&fit=crop&q=80" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border-2 border-white/90 overflow-hidden shadow-md bg-white">
              <img 
                src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=300&auto=format&fit=crop&q=80" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

        </div>
      </section>

      {/* 3. CONTENEDOR PRINCIPAL */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8 -mt-6 relative z-20">
        <div className="bg-[#fdfbf9] rounded-t-3xl p-4 sm:p-6 space-y-8 sm:space-y-10 border-t border-white/80 shadow-sm">

          {/* MENU SECTION */}
          <section>
            <div className="mb-4">
              <h2 className="text-xl sm:text-2xl font-black text-[#912328]">Menu</h2>
              <p className="text-xs text-slate-500 font-medium">What will you wish for?</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-rose-100/80 border border-rose-200 flex items-center justify-center text-[#912328] shadow-sm"><Cake className="w-4 h-4" /></div>
                <div className="w-8 h-8 rounded-full bg-rose-100/80 border border-rose-200 flex items-center justify-center text-[#912328] shadow-sm"><Cookie className="w-4 h-4" /></div>
                <div className="w-8 h-8 rounded-full bg-rose-100/80 border border-rose-200 flex items-center justify-center text-[#912328] shadow-sm"><Sparkles className="w-4 h-4" /></div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full flex-1">
                {[
                  { title: 'CLASSIC', img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=100&auto=format&fit=crop&q=80' },
                  { title: 'DOURMET', img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=100&auto=format&fit=crop&q=80' },
                  { title: 'DESSERTS', img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=100&auto=format&fit=crop&q=80' },
                  { title: 'COOKIES', img: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=100&auto=format&fit=crop&q=80' },
                ].map((cat, idx) => (
                  <div key={idx} className="bg-white border border-rose-100/80 p-2 sm:p-3 rounded-2xl text-center shadow-sm flex flex-col items-center justify-center gap-1.5 h-24 cursor-pointer">
                    <div className="w-10 h-10 rounded-xl overflow-hidden bg-rose-50 flex items-center justify-center">
                      <img src={cat.img} className="w-full h-full object-cover" />
                    </div>
                    <span className="text-[10px] font-black text-[#3d181a] tracking-wider">{cat.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* BESTSELLERS SECTION */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm sm:text-base font-extrabold text-[#912328]">Bestsellers from Across the Country</h2>
              <button className="bg-[#912328] text-white text-[10px] font-bold px-3 sm:px-4 py-1.5 rounded-full shadow-sm">
                VIEW ALL
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: 'Rich Chroctate Truffie Tuffle Cake', price: '₹500', reviews: '500', img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&auto=format&fit=crop&q=80' },
                { name: 'Checo Chip Truffle Cake Cake', price: '₹509', reviews: '300', img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&auto=format&fit=crop&q=80' },
                { name: 'Tropical Fruit1 N Almond Cake Cake', price: '₹509', reviews: '508', img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=300&auto=format&fit=crop&q=80' },
                { name: 'Rich Buttenscoch Crunch Carrie Cake', price: '₹399', reviews: '308', img: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=300&auto=format&fit=crop&q=80' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-3 border border-rose-100/60 shadow-sm relative flex flex-col justify-between h-64">
                  <button className="absolute top-2.5 left-2.5 text-[#912328] z-10">
                    <Heart className="w-3.5 h-3.5 fill-[#912328]" />
                  </button>
                  
                  <div className="w-full h-28 rounded-xl overflow-hidden mb-2 bg-slate-100">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                  </div>

                  <div>
                    <h3 className="font-bold text-[#3d181a] text-[11px] leading-tight mb-1">{item.name}</h3>
                    <div className="flex items-center gap-0.5 text-amber-400 text-[9px] mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-2.5 h-2.5 fill-amber-400" />
                      ))}
                      <span className="text-slate-400 ml-1">{item.reviews}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-black text-[#3d181a] text-xs">{item.price}</span>
                      <button className="bg-[#912328] text-white p-1.5 rounded-full shadow-sm">
                        <ShoppingBag className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* OUR PROMISE SECTION */}
          <section className="space-y-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-[#912328]">Our Promise</h2>
              <p className="text-xs text-slate-500 font-medium">Therts no secret spell – only honest the wark!</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              <div className="lg:col-span-7 space-y-4">
                <p className="text-[10px] text-slate-500 font-medium italic">A glinpes roa secret spell – only hocial world!</p>

                <div className="bg-rose-50/70 p-3 sm:p-4 rounded-2xl border border-rose-100 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full border border-rose-200 bg-white flex items-center justify-center mb-1"><Truck className="w-4 h-4 text-[#912328]" /></div>
                    <span className="text-[8px] font-extrabold text-[#3d181a]">ON-TIME DELIVERY</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full border border-rose-200 bg-white flex items-center justify-center mb-1"><Sparkles className="w-4 h-4 text-[#912328]" /></div>
                    <span className="text-[8px] font-extrabold text-[#3d181a]">5100+ DESIGNS</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full border border-rose-200 bg-white flex items-center justify-center mb-1"><Heart className="w-4 h-4 text-[#912328]" /></div>
                    <span className="text-[8px] font-extrabold text-[#3d181a]">2 CR+ ORDERS</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full border border-rose-200 bg-white flex items-center justify-center mb-1"><Clock className="w-4 h-4 text-[#912328]" /></div>
                    <span className="text-[8px] font-extrabold text-[#3d181a]">BAKED FRESN</span>
                  </div>
                </div>

                <div className="bg-rose-50/90 p-4 rounded-2xl border border-rose-100 flex items-center justify-between gap-3 shadow-sm">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-200 rounded-lg flex items-center justify-center rotate-[-12deg] border border-amber-400 font-extrabold text-[8px] text-amber-900 shrink-0 shadow-sm">
                    TICKET
                  </div>
                  <div className="flex-1">
                    <h4 className="font-black text-[#912328] text-xs">THE MAGICAL TICKET</h4>
                    <p className="text-[10px] text-slate-600 leading-tight mt-0.5">Add 3 reniniders in your account.<br />Win effters worth Rs. 750</p>
                  </div>
                  <button className="bg-[#912328] text-white text-[10px] font-bold px-3 py-1.5 rounded-xl shrink-0 shadow-sm">
                    UNLOCK NOW
                  </button>
                </div>

                <div className="bg-white p-2.5 rounded-2xl border border-rose-100 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" className="w-7 h-7 rounded-full border border-white object-cover" />
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" className="w-7 h-7 rounded-full border border-white object-cover" />
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" className="w-7 h-7 rounded-full border border-white object-cover" />
                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80" className="w-7 h-7 rounded-full border border-white object-cover" />
                  </div>
                  <span className="text-xs font-bold text-slate-600">Follow us on social!</span>
                </div>
              </div>

              {/* GALERÍA 2X3 (FOTO 1 GARANTIZADA: PASTEL BLANCO DE PISOS CON DETALLES DORADOS) */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-2 w-full">
                {/* 1. PRIMERA IMAGEN: Pastel de Bodas Blanco de Pisos */}
                <div className="h-24 rounded-2xl overflow-hidden border border-rose-100 bg-white relative">
                  <img src="https://images.unsplash.com/photo-1535141192574-5d4897c13136?w=300&auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Pastel Blanco" />
                  <span className="absolute bottom-1 left-2 text-[8px] text-white font-bold drop-shadow">ROVODN...</span>
                </div>
                {/* 2. Chica con Pastel */}
                <div className="h-24 rounded-2xl overflow-hidden border border-rose-100 bg-white relative">
                  <img src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=300&auto=format&fit=crop&q=80" className="w-full h-full object-cover" />
                  <span className="absolute bottom-1 left-2 text-[8px] text-white font-bold drop-shadow">ROLAIGLE</span>
                </div>
                
                {/* 3. Pareja */}
                <div className="h-24 rounded-2xl overflow-hidden border border-rose-100 bg-white relative">
                  <img src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300&auto=format&fit=crop&q=80" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-1 text-center">
                    <span className="text-[7px] text-white font-bold leading-tight">WIFT TW WWT POSECITIOR IGHTY NUSHIDO</span>
                  </div>
                </div>

                {/* 4. Repostero */}
                <div className="h-24 rounded-2xl overflow-hidden border border-rose-100 bg-white relative">
                  <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=300&auto=format&fit=crop&q=80" className="w-full h-full object-cover" />
                  <span className="absolute bottom-2 right-2 text-[8px] text-white font-bold drop-shadow">Cbeslda colleanot</span>
                </div>

                {/* 5. Dos Chefs */}
                <div className="h-24 rounded-2xl overflow-hidden border border-rose-100 bg-white">
                  <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=300&auto=format&fit=crop&q=80" className="w-full h-full object-cover" />
                </div>

                {/* 6. Pastel Alto */}
                <div className="h-24 rounded-2xl overflow-hidden border border-rose-100 bg-white relative">
                  <img src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=300&auto=format&fit=crop&q=80" className="w-full h-full object-cover" />
                  <div className="absolute bottom-1 right-1 text-right text-[7px] text-white font-bold drop-shadow leading-tight">
                    5010RA<br />Coatn onid8<br />CESRFLIDERIS
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* 6. BANNER FSSAI */}
          <div className="bg-[#912328] text-white py-3 px-4 rounded-2xl text-center font-extrabold text-xs shadow-md">
            Dakingo – Your Trusted FSSAI Certified Online Bakery for Every Celebration
          </div>

          {/* 7. FOOTER */}
          <footer className="pt-6 border-t border-rose-200/60 pb-6">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 text-[10px] mb-6">
              <div>
                <h5 className="font-extrabold text-[#912328] text-sm mb-1">Dakingo</h5>
                <ul className="space-y-0.5 text-slate-600">
                  <li>Our Story</li>
                  <li>Comiteat Us</li>
                  <li>Locdais Mielsb</li>
                  <li>Woofla</li>
                  <li>Cenenep</li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-slate-800 uppercase mb-1">KNOW US</h5>
                <ul className="space-y-0.5 text-slate-500">
                  <li>Combest Us</li>
                  <li>Blog</li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-slate-800 uppercase mb-1">NEED HELP</h5>
                <ul className="space-y-0.5 text-slate-500">
                  <li>Canalultion And Refiond</li>
                  <li>Priveery Pofioy</li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-slate-800 uppercase mb-1">MORE INFO</h5>
                <ul className="space-y-0.5 text-slate-500">
                  <li>Termm And Dificy</li>
                  <li>Custtorm Gheikziane</li>
                </ul>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <h5 className="font-bold text-slate-800 uppercase mb-1">MORE INFO</h5>
                <p className="text-slate-500">Cognors & Offers</p>
                <p className="text-slate-500 mb-2">Dewnfloud App</p>
                <div className="flex items-center gap-1">
                  <input type="email" placeholder="Enter Email Address" className="w-full bg-white border border-slate-300 rounded-full px-2 py-1 text-[9px] outline-none" />
                  <button className="bg-[#912328] text-white px-2 py-1 rounded-full font-bold text-[8px] shrink-0">SUBSCRIBE</button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-1 text-[10px] text-slate-500">
              <ArrowDownCircle className="w-3.5 h-3.5 text-[#912328]" />
              <span>Ney, need any help?</span>
            </div>
          </footer>

        </div>
      </div>

    </div>
  );
}
