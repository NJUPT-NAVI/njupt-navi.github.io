const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/mermaid.core.Cmd7RfDj.js","_astro/preload-helper.BlTxHScW.js"])))=>i.map(i=>d[i]);
import{_ as Z}from"./preload-helper.BlTxHScW.js";const F=new Set,L=new WeakSet;let M=!0,V,_=!1;function J(e){_||(_=!0,M??=!1,V??="hover",Q(),ee(),te(),re())}function Q(){for(const e of["touchstart","mousedown"])document.body.addEventListener(e,o=>{w(o.target,"tap")&&x(o.target.href,{ignoreSlowConnection:!0})},{passive:!0})}function ee(){let e;document.body.addEventListener("focusin",r=>{w(r.target,"hover")&&o(r)},{passive:!0}),document.body.addEventListener("focusout",n,{passive:!0}),z(()=>{for(const r of document.getElementsByTagName("a"))L.has(r)||w(r,"hover")&&(L.add(r),r.addEventListener("mouseenter",o,{passive:!0}),r.addEventListener("mouseleave",n,{passive:!0}))});function o(r){const c=r.target.href;e&&clearTimeout(e),e=setTimeout(()=>{x(c)},80)}function n(){e&&(clearTimeout(e),e=0)}}function te(){let e;z(()=>{for(const o of document.getElementsByTagName("a"))L.has(o)||w(o,"viewport")&&(L.add(o),e??=oe(),e.observe(o))})}function oe(){const e=new WeakMap;return new IntersectionObserver((o,n)=>{for(const r of o){const c=r.target,l=e.get(c);r.isIntersecting?(l&&clearTimeout(l),e.set(c,setTimeout(()=>{n.unobserve(c),e.delete(c),x(c.href)},300))):l&&(clearTimeout(l),e.delete(c))}})}function re(){z(()=>{for(const e of document.getElementsByTagName("a"))w(e,"load")&&x(e.href)})}function x(e,o){e=e.replace(/#.*/,"");const n=o?.ignoreSlowConnection??!1;if(ne(e,n))if(F.add(e),document.createElement("link").relList?.supports?.("prefetch")&&o?.with!=="fetch"){const r=document.createElement("link");r.rel="prefetch",r.setAttribute("href",e),document.head.append(r)}else fetch(e,{priority:"low"})}function ne(e,o){if(!navigator.onLine||!o&&W())return!1;try{const n=new URL(e,location.href);return location.origin===n.origin&&(location.pathname!==n.pathname||location.search!==n.search)&&!F.has(e)}catch{}return!1}function w(e,o){if(e?.tagName!=="A")return!1;const n=e.dataset.astroPrefetch;return n==="false"?!1:o==="tap"&&(n!=null||M)&&W()?!0:n==null&&M||n===""?o===V:n===o}function W(){if("connection"in navigator){const e=navigator.connection;return e.saveData||/2g/.test(e.effectiveType)}return!1}function z(e){e();let o=!1;document.addEventListener("astro:page-load",()=>{if(!o){o=!0;return}e()})}function se(e={}){const{position:o="right",smoothScroll:n=!0,threshold:r=30,svgPath:c="M18 15l-6-6-6 6",svgStrokeWidth:l="2",borderRadius:m="15",showTooltip:s=!1,showProgressRing:p=!1,progressRingColor:u="yellow",showOnHomepage:g=!1}=e,H=((t,h)=>{if(typeof t=="string")return t;if(typeof t!="object"||t===null)return"Scroll to top";const i=h&&typeof h=="string"?h.toLowerCase().trim():"";if(!i){const f=t.en;return typeof f=="string"?f:"Scroll to top"}let d=t[i];if(typeof d=="string")return d;if(i.includes("-")){const f=i.split("-")[0];if(d=t[f],typeof d=="string")return d}return d=t.en,typeof d=="string"?d:"Scroll to top"})(e.tooltipText,document.documentElement.lang);let b=null;const G=()=>document.querySelector(".hero")||document.querySelector(".sl-hero")||document.querySelector('[data-page="index"]')||document.querySelector(".landing-page")||document.querySelector(".homepage")||document.querySelector("[data-starlight-homepage]")||document.querySelector(".site-hero")||document.body.classList.contains("homepage")||document.body.classList.contains("homepage")||document.body.classList.contains("landing")||document.querySelector("main.sl-main")&&document.querySelector("main.sl-main .hero, main.sl-main .sl-hero"),X=()=>{if(b&&b(),G()&&!g)return;const t=document.createElement("button");t.id="scroll-to-top-button",t.ariaLabel=H,t.setAttribute("aria-describedby",s?"scroll-to-top-tooltip":""),t.setAttribute("role","button"),t.setAttribute("tabindex","0");let h=!1;t.innerHTML=`
      ${p?`
      <svg class="scroll-progress-ring" 
           width="47"   
           height="47" 
           viewBox="0 0 47 47"
           style="position: absolute; top: 0; left: 0;">
        <!-- Background circle -->
        <circle cx="23.5" cy="23.5" r="22" 
                fill="none" 
                stroke="${u}" 
                stroke-width="3" 
                opacity="0.2" />
        <!-- Progress circle -->
        <circle cx="23.5" cy="23.5" r="22" 
                fill="none" 
                stroke="${u}" 
                stroke-width="3" 
                stroke-linecap="round"
                class="scroll-progress-circle"
                style="transform: rotate(-90deg); transform-origin: center;" />
      </svg>
      `:""}
      <svg xmlns="http://www.w3.org/2000/svg" 
           width="35" 
           height="35" 
           viewBox="0 0 24 24"            
           fill="none" 
           stroke="currentColor" 
           stroke-width="${l}" 
           stroke-linecap="round" 
           stroke-linejoin="round"
           style="position: relative; z-index: 1;">
        <path d="${c}"/>
      </svg>
    `;const i=document.createElement("div");i.id="scroll-to-top-tooltip",i.textContent=H;const d=document.createElement("div");d.style.cssText=`
    position: absolute;
    top: 100%; /* Position below the tooltip */
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid var(--sl-color-gray-7);
  `;const f=document.createElement("style");f.id="scroll-to-top-styles",f.textContent=`
    .scroll-to-top-button {
      position: fixed;
      bottom: 40px;
      width: 47px;
      height: 47px;
      ${o==="left"?"left: 40px;":o==="right"?"right: 35px;":"left: 50%;"}
      border-radius: ${m}%;     
      background-color: var(--sl-color-accent);       
      color: white;
      cursor: pointer;
      display: flex;
      align-items: center;      
      justify-content: center;
      opacity: 0;
      visibility: hidden;
      transform: ${o==="center"?"translateX(-50%) scale(0)":"scale(0)"};
      transition: opacity 0.3s ease, visibility 0.3s ease, background-color 0.3s ease, transform 0.3s ease;      
      z-index: 100;            
      border: 1px solid var(--sl-color-accent);
      transform-origin: center;
      -webkit-tap-highlight-color: transparent; /* Disable mobile tap highlight */
      touch-action: manipulation; /* Prevent double-tap zoom */
      box-shadow: 0 0 0 1px rgba(0,0,0,0.04),0 4px 8px 0 rgba(0,0,0,0.2);
    }
      .scroll-to-top-button:active {
        background-color: var(--sl-color-accent-dark); 
        color: var(--sl-text-white);        
        transition: background-color 0.1s ease, transform 0.1s ease; 
     }
      .scroll-to-top-button.visible {
        opacity: 1;
        visibility: visible;
        transform: ${o==="center"?"translateX(-50%) scale(1)":"scale(1)"};        
      }

      .scroll-to-top-button:hover {
        background-color: var(--sl-color-accent-low); 
        box-shadow: 0 0 0 1px rgba(0,0,0,0.04),0 4px 8px 0 rgba(0,0,0,0.2);
        color: var(--sl-color-accent);
        border-color: var(--sl-color-accent);     
      }
      
      .scroll-to-top-button.keyboard-focus {
        outline: 2px solid var(--sl-color-text);
        outline-offset: 2px;
      }

      .scroll-to-top-btn-tooltip {
        position: absolute;
        ${o==="left"?"left: -25px;":"right: -22px;"}
        top: -47px;
        background-color: var(--sl-color-gray-7);
        color: var(--sl-color-text);
        padding: 5px 10px;
        border-radius: 4px;
        font-weight: 400;
        font-size: 14px;
        white-space: nowrap;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.2s, visibility 0.3s;
        pointer-events: none;
     }
      .scroll-to-top-btn-tooltip.visible {
        opacity: 1;
        visibility: visible;        
      }

      /* Progress ring styles */
      .scroll-progress-ring {
        pointer-events: none;
      }
      
      .scroll-progress-circle {
        stroke-dasharray: 138.23; /* 2 * π * r = 2 * π * 22 ≈ 138.23 */
        stroke-dashoffset: 138.23;
        transition: stroke-dashoffset 0.1s ease;
      }
    `,document.head.appendChild(f),t.classList.add("scroll-to-top-button"),document.body.appendChild(t),s&&(i.classList.add("scroll-to-top-btn-tooltip"),i.appendChild(d),t.appendChild(i));const E=()=>{i.classList.remove("visible")},q=()=>{s&&i.classList.add("visible")};t.addEventListener("mouseenter",()=>{q()}),t.addEventListener("mouseleave",()=>{E()});const S=()=>{E(),window.scrollTo({top:0,behavior:n?"smooth":"auto"}),t.classList.remove("active")};document.addEventListener("keydown",a=>{a.key==="Tab"&&(h=!0)}),t.addEventListener("mousedown",()=>{h=!1}),t.addEventListener("keydown",a=>{a.key==="Enter"&&(S(),t.classList.remove("keyboard-focus"))}),t.addEventListener("focus",()=>{h&&(q(),t.classList.add("keyboard-focus"))}),t.addEventListener("blur",()=>{E(),t.classList.remove("keyboard-focus")}),t.addEventListener("touchstart",a=>{a.preventDefault(),t.classList.add("active")}),t.addEventListener("touchend",a=>{a.preventDefault(),S(),t.classList.remove("active")}),t.addEventListener("click",a=>{a.preventDefault(),S()});function K(a,C){let v;return function(){const k=arguments,P=this;v||(a.apply(P,k),v=!0,setTimeout(()=>v=!1,C))}}const B=()=>{const a=window.scrollY,C=window.innerHeight,v=document.documentElement.scrollHeight,k=a/(v-C);if(p){const I=t.querySelector(".scroll-progress-circle");if(I){let y=k*100;y>=99.5&&(y=100),y<0&&(y=0);const N=138.23,Y=N-y/100*N;I.style.strokeDashoffset=Y.toString()}}const P=r>=10&&r<=99?r:30;k>P/100?t.classList.add("visible"):t.classList.remove("visible")},O=K(B,16);window.addEventListener("scroll",O),B();const R=()=>{document.documentElement.classList.contains("theme-dark")?(i.style.backgroundColor="var(--sl-color-gray-7)",i.style.color="var(--sl-color-text)",d.style.borderTopColor="var(--sl-color-gray-7)"):(i.style.backgroundColor="black",i.style.color="white",d.style.borderTopColor="black")};R();const $=new MutationObserver(R);$.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]});function A(){Math.round(window.outerWidth/window.innerWidth*100)/100>3?t.style.display="none":t.style.display="flex"}return window.addEventListener("resize",A),A(),b=()=>{window.removeEventListener("scroll",O),window.removeEventListener("resize",A),$.disconnect(),t&&t.parentNode&&t.parentNode.removeChild(t);const a=document.getElementById("scroll-to-top-styles");a&&a.remove()},b},T=()=>{setTimeout(X,10)};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",T):T(),document.addEventListener("astro:page-load",T),document.addEventListener("astro:before-preparation",()=>{b&&b()})}se({position:"right",tooltipText:"Scroll to top",smoothScroll:!0,threshold:30,svgPath:"M18 15l-6-6-6 6",svgStrokeWidth:"2",borderRadius:"15",showTooltip:!1,showProgressRing:!1,progressRingColor:"yellow",showOnHomepage:!1});const j=()=>document.querySelectorAll("pre.mermaid").length>0;j()?(console.log("[astro-mermaid] Mermaid diagrams detected, loading mermaid.js..."),Z(()=>import("./mermaid.core.Cmd7RfDj.js").then(e=>e.bD),__vite__mapDeps([0,1])).then(async({default:e})=>{const o=[];if(o&&o.length>0){console.log("[astro-mermaid] Registering",o.length,"icon packs");const l=o.map(m=>({name:m.name,loader:new Function("return "+m.loader)()}));await e.registerIconPacks(l)}const n={startOnLoad:!1,theme:"forest"},r={light:"default",dark:"dark"};async function c(){console.log("[astro-mermaid] Initializing mermaid diagrams...");const l=document.querySelectorAll("pre.mermaid");if(console.log("[astro-mermaid] Found",l.length,"mermaid diagrams"),l.length===0)return;let m=n.theme;{const s=document.documentElement.getAttribute("data-theme"),p=document.body.getAttribute("data-theme");m=r[s||p]||n.theme,console.log("[astro-mermaid] Using theme:",m,"from",s?"html":"body")}e.initialize({...n,theme:m,gitGraph:{mainBranchName:"main",showCommitLabel:!0,showBranches:!0,rotateCommitLabel:!0}});for(const s of l){if(s.hasAttribute("data-processed"))continue;s.hasAttribute("data-diagram")||s.setAttribute("data-diagram",s.textContent||"");const p=s.getAttribute("data-diagram")||"",u="mermaid-"+Math.random().toString(36).slice(2,11);console.log("[astro-mermaid] Rendering diagram:",u);try{const g=document.getElementById(u);g&&g.remove();const{svg:D}=await e.render(u,p);s.innerHTML=D,s.setAttribute("data-processed","true"),console.log("[astro-mermaid] Successfully rendered diagram:",u)}catch(g){console.error("[astro-mermaid] Mermaid rendering error for diagram:",u,g),s.innerHTML=`<div style="color: red; padding: 1rem; border: 1px solid red; border-radius: 0.5rem;">
            <strong>Error rendering diagram:</strong><br/>
            ${g.message||"Unknown error"}
          </div>`,s.setAttribute("data-processed","true")}}}c();{const l=new MutationObserver(m=>{for(const s of m)s.type==="attributes"&&s.attributeName==="data-theme"&&(document.querySelectorAll("pre.mermaid[data-processed]").forEach(p=>{p.removeAttribute("data-processed")}),c())});l.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),l.observe(document.body,{attributes:!0,attributeFilter:["data-theme"]})}document.addEventListener("astro:after-swap",()=>{j()&&c()})}).catch(e=>{console.error("[astro-mermaid] Failed to load mermaid:",e)})):console.log("[astro-mermaid] No mermaid diagrams found on this page, skipping mermaid.js load");const U=document.createElement("style");U.textContent=`
            /* Prevent layout shifts by setting minimum height */
            pre.mermaid {
              display: flex;
              justify-content: center;
              align-items: center;
              margin: 2rem 0;
              padding: 1rem;
              background-color: transparent;
              border: none;
              overflow: auto;
              min-height: 200px; /* Prevent layout shift */
              position: relative;
            }
            
            /* Loading state with skeleton loader */
            pre.mermaid:not([data-processed]) {
              background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
              background-size: 200% 100%;
              animation: shimmer 1.5s infinite;
            }
            
            /* Dark mode skeleton loader */
            [data-theme="dark"] pre.mermaid:not([data-processed]) {
              background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
              background-size: 200% 100%;
            }
            
            @keyframes shimmer {
              0% {
                background-position: -200% 0;
              }
              100% {
                background-position: 200% 0;
              }
            }
            
            /* Show processed diagrams with smooth transition */
            pre.mermaid[data-processed] {
              animation: none;
              background: transparent;
              min-height: auto; /* Allow natural height after render */
            }
            
            /* Ensure responsive sizing for mermaid SVGs */
            pre.mermaid svg {
              max-width: 100%;
              height: auto;
            }
            
            /* Optional: Add subtle background for better visibility */
            @media (prefers-color-scheme: dark) {
              pre.mermaid[data-processed] {
                background-color: rgba(255, 255, 255, 0.02);
                border-radius: 0.5rem;
              }
            }
            
            @media (prefers-color-scheme: light) {
              pre.mermaid[data-processed] {
                background-color: rgba(0, 0, 0, 0.02);
                border-radius: 0.5rem;
              }
            }
            
            /* Respect user's color scheme preference */
            [data-theme="dark"] pre.mermaid[data-processed] {
              background-color: rgba(255, 255, 255, 0.02);
              border-radius: 0.5rem;
            }
            
            [data-theme="light"] pre.mermaid[data-processed] {
              background-color: rgba(0, 0, 0, 0.02);
              border-radius: 0.5rem;
            }
          `;document.head.appendChild(U);J();export{se as default};
