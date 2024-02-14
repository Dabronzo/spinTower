var Ic=Object.defineProperty;var Nc=(i,e,t)=>e in i?Ic(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Ba=(i,e,t)=>(Nc(i,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ya="161",Dc=0,Oa=1,Uc=2,Ol=1,Fc=2,In=3,Un=0,Kt=1,xn=2,Kn=0,Gi=1,za=2,Va=3,Ha=4,Bc=5,li=100,Oc=101,zc=102,Ga=103,ka=104,Vc=200,Hc=201,Gc=202,kc=203,ia=204,ra=205,Wc=206,Xc=207,qc=208,Yc=209,jc=210,Kc=211,Zc=212,$c=213,Jc=214,Qc=0,eh=1,th=2,ns=3,nh=4,ih=5,rh=6,sh=7,zl=0,ah=1,oh=2,Zn=0,lh=1,ch=2,hh=3,uh=4,dh=5,fh=6,Wa="attached",ph="detached",Vl=300,Xi=301,qi=302,sa=303,aa=304,cs=306,Yi=1e3,rn=1001,is=1002,zt=1003,oa=1004,Oi=1005,Wt=1006,es=1007,Nn=1008,$n=1009,mh=1010,vh=1011,Ma=1012,Hl=1013,qn=1014,yn=1015,xr=1016,Gl=1017,kl=1018,di=1020,gh=1021,sn=1023,_h=1024,xh=1025,fi=1026,ji=1027,yh=1028,Wl=1029,Mh=1030,Xl=1031,ql=1033,gs=33776,_s=33777,xs=33778,ys=33779,Xa=35840,qa=35841,Ya=35842,ja=35843,Yl=36196,Ka=37492,Za=37496,$a=37808,Ja=37809,Qa=37810,eo=37811,to=37812,no=37813,io=37814,ro=37815,so=37816,ao=37817,oo=37818,lo=37819,co=37820,ho=37821,Ms=36492,uo=36494,fo=36495,Sh=36283,po=36284,mo=36285,vo=36286,yr=2300,Ki=2301,Ss=2302,go=2400,_o=2401,xo=2402,Eh=2500,Th=0,jl=1,la=2,Kl=3e3,pi=3001,wh=3200,bh=3201,Zl=0,Ah=1,an="",Ct="srgb",Ht="srgb-linear",Sa="display-p3",hs="display-p3-linear",rs="linear",St="srgb",ss="rec709",as="p3",yi=7680,yo=519,Rh=512,Ch=513,Ph=514,$l=515,Lh=516,Ih=517,Nh=518,Dh=519,ca=35044,Mo="300 es",ha=1035,Dn=2e3,os=2001;class er{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let So=1234567;const mr=Math.PI/180,Zi=180/Math.PI;function mn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function Xt(i,e,t){return Math.max(e,Math.min(t,i))}function Ea(i,e){return(i%e+e)%e}function Uh(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Fh(i,e,t){return i!==e?(t-i)/(e-i):0}function vr(i,e,t){return(1-t)*i+t*e}function Bh(i,e,t,n){return vr(i,e,1-Math.exp(-t*n))}function Oh(i,e=1){return e-Math.abs(Ea(i,e*2)-e)}function zh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Vh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Hh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Gh(i,e){return i+Math.random()*(e-i)}function kh(i){return i*(.5-Math.random())}function Wh(i){i!==void 0&&(So=i);let e=So+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Xh(i){return i*mr}function qh(i){return i*Zi}function ua(i){return(i&i-1)===0&&i!==0}function Yh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ls(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function jh(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),h=s((e+n)/2),u=a((e+n)/2),c=s((e-n)/2),d=a((e-n)/2),f=s((n-e)/2),v=a((n-e)/2);switch(r){case"XYX":i.set(o*u,l*c,l*d,o*h);break;case"YZY":i.set(l*d,o*u,l*c,o*h);break;case"ZXZ":i.set(l*c,l*d,o*u,o*h);break;case"XZX":i.set(o*u,l*v,l*f,o*h);break;case"YXY":i.set(l*f,o*u,l*v,o*h);break;case"ZYZ":i.set(l*v,l*f,o*u,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function fn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function xt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Kh={DEG2RAD:mr,RAD2DEG:Zi,generateUUID:mn,clamp:Xt,euclideanModulo:Ea,mapLinear:Uh,inverseLerp:Fh,lerp:vr,damp:Bh,pingpong:Oh,smoothstep:zh,smootherstep:Vh,randInt:Hh,randFloat:Gh,randFloatSpread:kh,seededRandom:Wh,degToRad:Xh,radToDeg:qh,isPowerOfTwo:ua,ceilPowerOfTwo:Yh,floorPowerOfTwo:ls,setQuaternionFromProperEuler:jh,normalize:xt,denormalize:fn};class ht{constructor(e=0,t=0){ht.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rt{constructor(e,t,n,r,s,a,o,l,h){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,h)}set(e,t,n,r,s,a,o,l,h){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],h=n[1],u=n[4],c=n[7],d=n[2],f=n[5],v=n[8],g=r[0],p=r[3],m=r[6],_=r[1],y=r[4],x=r[7],w=r[2],R=r[5],P=r[8];return s[0]=a*g+o*_+l*w,s[3]=a*p+o*y+l*R,s[6]=a*m+o*x+l*P,s[1]=h*g+u*_+c*w,s[4]=h*p+u*y+c*R,s[7]=h*m+u*x+c*P,s[2]=d*g+f*_+v*w,s[5]=d*p+f*y+v*R,s[8]=d*m+f*x+v*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],h=e[7],u=e[8];return t*a*u-t*o*h-n*s*u+n*o*l+r*s*h-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],h=e[7],u=e[8],c=u*a-o*h,d=o*l-u*s,f=h*s-a*l,v=t*c+n*d+r*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=c*g,e[1]=(r*h-u*n)*g,e[2]=(o*n-r*a)*g,e[3]=d*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-o*t)*g,e[6]=f*g,e[7]=(n*l-h*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),h=Math.sin(s);return this.set(n*l,n*h,-n*(l*a+h*o)+a+e,-r*h,r*l,-r*(-h*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Es.makeScale(e,t)),this}rotate(e){return this.premultiply(Es.makeRotation(-e)),this}translate(e,t){return this.premultiply(Es.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Es=new rt;function Jl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zh(){const i=Mr("canvas");return i.style.display="block",i}const Eo={};function mi(i){i in Eo||(Eo[i]=!0,console.warn(i))}const To=new rt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wo=new rt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),br={[Ht]:{transfer:rs,primaries:ss,toReference:i=>i,fromReference:i=>i},[Ct]:{transfer:St,primaries:ss,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[hs]:{transfer:rs,primaries:as,toReference:i=>i.applyMatrix3(wo),fromReference:i=>i.applyMatrix3(To)},[Sa]:{transfer:St,primaries:as,toReference:i=>i.convertSRGBToLinear().applyMatrix3(wo),fromReference:i=>i.applyMatrix3(To).convertLinearToSRGB()}},$h=new Set([Ht,hs]),_t={enabled:!0,_workingColorSpace:Ht,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!$h.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=br[e].toReference,r=br[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return br[i].primaries},getTransfer:function(i){return i===an?rs:br[i].transfer}};function ki(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ts(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Mi;class Ql{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Mi===void 0&&(Mi=Mr("canvas")),Mi.width=e.width,Mi.height=e.height;const n=Mi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Mi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Mr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ki(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ki(t[n]/255)*255):t[n]=ki(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Jh=0;class ec{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=mn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ws(r[a].image)):s.push(ws(r[a]))}else s=ws(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function ws(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ql.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Qh=0;class Dt extends er{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,n=rn,r=rn,s=Wt,a=Nn,o=sn,l=$n,h=Dt.DEFAULT_ANISOTROPY,u=an){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=mn(),this.name="",this.source=new ec(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(mi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===pi?Ct:an),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yi:e.x=e.x-Math.floor(e.x);break;case rn:e.x=e.x<0?0:1;break;case is:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yi:e.y=e.y-Math.floor(e.y);break;case rn:e.y=e.y<0?0:1;break;case is:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return mi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ct?pi:Kl}set encoding(e){mi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===pi?Ct:an}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=Vl;Dt.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,t=0,n=0,r=1){Mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,h=l[0],u=l[4],c=l[8],d=l[1],f=l[5],v=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(c-g)<.01&&Math.abs(v-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(c+g)<.1&&Math.abs(v+p)<.1&&Math.abs(h+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(h+1)/2,x=(f+1)/2,w=(m+1)/2,R=(u+d)/4,P=(c+g)/4,F=(v+p)/4;return y>x&&y>w?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=R/n,s=P/n):x>w?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=R/r,s=F/r):w<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),n=P/s,r=F/s),this.set(n,r,s,t),this}let _=Math.sqrt((p-v)*(p-v)+(c-g)*(c-g)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(p-v)/_,this.y=(c-g)/_,this.z=(d-u)/_,this.w=Math.acos((h+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class eu extends er{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(mi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===pi?Ct:an),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Dt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ec(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gi extends eu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class tc extends Dt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tu extends Dt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],h=n[r+1],u=n[r+2],c=n[r+3];const d=s[a+0],f=s[a+1],v=s[a+2],g=s[a+3];if(o===0){e[t+0]=l,e[t+1]=h,e[t+2]=u,e[t+3]=c;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=v,e[t+3]=g;return}if(c!==g||l!==d||h!==f||u!==v){let p=1-o;const m=l*d+h*f+u*v+c*g,_=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const w=Math.sqrt(y),R=Math.atan2(w,m*_);p=Math.sin(p*R)/w,o=Math.sin(o*R)/w}const x=o*_;if(l=l*p+d*x,h=h*p+f*x,u=u*p+v*x,c=c*p+g*x,p===1-o){const w=1/Math.sqrt(l*l+h*h+u*u+c*c);l*=w,h*=w,u*=w,c*=w}}e[t]=l,e[t+1]=h,e[t+2]=u,e[t+3]=c}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],h=n[r+2],u=n[r+3],c=s[a],d=s[a+1],f=s[a+2],v=s[a+3];return e[t]=o*v+u*c+l*f-h*d,e[t+1]=l*v+u*d+h*c-o*f,e[t+2]=h*v+u*f+o*d-l*c,e[t+3]=u*v-o*c-l*d-h*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,h=o(n/2),u=o(r/2),c=o(s/2),d=l(n/2),f=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=d*u*c+h*f*v,this._y=h*f*c-d*u*v,this._z=h*u*v+d*f*c,this._w=h*u*c-d*f*v;break;case"YXZ":this._x=d*u*c+h*f*v,this._y=h*f*c-d*u*v,this._z=h*u*v-d*f*c,this._w=h*u*c+d*f*v;break;case"ZXY":this._x=d*u*c-h*f*v,this._y=h*f*c+d*u*v,this._z=h*u*v+d*f*c,this._w=h*u*c-d*f*v;break;case"ZYX":this._x=d*u*c-h*f*v,this._y=h*f*c+d*u*v,this._z=h*u*v-d*f*c,this._w=h*u*c+d*f*v;break;case"YZX":this._x=d*u*c+h*f*v,this._y=h*f*c+d*u*v,this._z=h*u*v-d*f*c,this._w=h*u*c-d*f*v;break;case"XZY":this._x=d*u*c-h*f*v,this._y=h*f*c-d*u*v,this._z=h*u*v+d*f*c,this._w=h*u*c+d*f*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],h=t[2],u=t[6],c=t[10],d=n+o+c;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-h)*f,this._z=(a-r)*f}else if(n>o&&n>c){const f=2*Math.sqrt(1+n-o-c);this._w=(u-l)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+h)/f}else if(o>c){const f=2*Math.sqrt(1+o-n-c);this._w=(s-h)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+c-n-o);this._w=(a-r)/f,this._x=(s+h)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,h=t._z,u=t._w;return this._x=n*u+a*o+r*h-s*l,this._y=r*u+a*l+s*o-n*h,this._z=s*u+a*h+n*l-r*o,this._w=a*u-n*o-r*l-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const h=Math.sqrt(l),u=Math.atan2(h,o),c=Math.sin((1-t)*u)/h,d=Math.sin(t*u)/h;return this._w=a*c+this._w*d,this._x=n*c+this._x*d,this._y=r*c+this._y*d,this._z=s*c+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,t=0,n=0){Q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,h=2*(a*r-o*n),u=2*(o*t-s*r),c=2*(s*n-a*t);return this.x=t+l*h+a*c-o*u,this.y=n+l*u+o*h-s*c,this.z=r+l*c+s*u-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return bs.copy(this).projectOnVector(e),this.sub(bs)}reflect(e){return this.sub(bs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bs=new Q,bo=new Qn;class Tn{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,hn):hn.fromBufferAttribute(s,a),hn.applyMatrix4(e.matrixWorld),this.expandByPoint(hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ar.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ar.copy(n.boundingBox)),Ar.applyMatrix4(e.matrixWorld),this.union(Ar)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,hn),hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sr),Rr.subVectors(this.max,sr),Si.subVectors(e.a,sr),Ei.subVectors(e.b,sr),Ti.subVectors(e.c,sr),Bn.subVectors(Ei,Si),On.subVectors(Ti,Ei),ti.subVectors(Si,Ti);let t=[0,-Bn.z,Bn.y,0,-On.z,On.y,0,-ti.z,ti.y,Bn.z,0,-Bn.x,On.z,0,-On.x,ti.z,0,-ti.x,-Bn.y,Bn.x,0,-On.y,On.x,0,-ti.y,ti.x,0];return!As(t,Si,Ei,Ti,Rr)||(t=[1,0,0,0,1,0,0,0,1],!As(t,Si,Ei,Ti,Rr))?!1:(Cr.crossVectors(Bn,On),t=[Cr.x,Cr.y,Cr.z],As(t,Si,Ei,Ti,Rr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const bn=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],hn=new Q,Ar=new Tn,Si=new Q,Ei=new Q,Ti=new Q,Bn=new Q,On=new Q,ti=new Q,sr=new Q,Rr=new Q,Cr=new Q,ni=new Q;function As(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){ni.fromArray(i,s);const o=r.x*Math.abs(ni.x)+r.y*Math.abs(ni.y)+r.z*Math.abs(ni.z),l=e.dot(ni),h=t.dot(ni),u=n.dot(ni);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>o)return!1}return!0}const nu=new Tn,ar=new Q,Rs=new Q;class ln{constructor(e=new Q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):nu.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ar.subVectors(e,this.center);const t=ar.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ar,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ar.copy(e.center).add(Rs)),this.expandByPoint(ar.copy(e.center).sub(Rs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const An=new Q,Cs=new Q,Pr=new Q,zn=new Q,Ps=new Q,Lr=new Q,Ls=new Q;class us{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,An)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=An.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(An.copy(this.origin).addScaledVector(this.direction,t),An.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Cs.copy(e).add(t).multiplyScalar(.5),Pr.copy(t).sub(e).normalize(),zn.copy(this.origin).sub(Cs);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Pr),o=zn.dot(this.direction),l=-zn.dot(Pr),h=zn.lengthSq(),u=Math.abs(1-a*a);let c,d,f,v;if(u>0)if(c=a*l-o,d=a*o-l,v=s*u,c>=0)if(d>=-v)if(d<=v){const g=1/u;c*=g,d*=g,f=c*(c+a*d+2*o)+d*(a*c+d+2*l)+h}else d=s,c=Math.max(0,-(a*d+o)),f=-c*c+d*(d+2*l)+h;else d=-s,c=Math.max(0,-(a*d+o)),f=-c*c+d*(d+2*l)+h;else d<=-v?(c=Math.max(0,-(-a*s+o)),d=c>0?-s:Math.min(Math.max(-s,-l),s),f=-c*c+d*(d+2*l)+h):d<=v?(c=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+h):(c=Math.max(0,-(a*s+o)),d=c>0?s:Math.min(Math.max(-s,-l),s),f=-c*c+d*(d+2*l)+h);else d=a>0?-s:s,c=Math.max(0,-(a*d+o)),f=-c*c+d*(d+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,c),r&&r.copy(Cs).addScaledVector(Pr,d),f}intersectSphere(e,t){An.subVectors(e.center,this.origin);const n=An.dot(this.direction),r=An.dot(An)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const h=1/this.direction.x,u=1/this.direction.y,c=1/this.direction.z,d=this.origin;return h>=0?(n=(e.min.x-d.x)*h,r=(e.max.x-d.x)*h):(n=(e.max.x-d.x)*h,r=(e.min.x-d.x)*h),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),c>=0?(o=(e.min.z-d.z)*c,l=(e.max.z-d.z)*c):(o=(e.max.z-d.z)*c,l=(e.min.z-d.z)*c),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,An)!==null}intersectTriangle(e,t,n,r,s){Ps.subVectors(t,e),Lr.subVectors(n,e),Ls.crossVectors(Ps,Lr);let a=this.direction.dot(Ls),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;zn.subVectors(this.origin,e);const l=o*this.direction.dot(Lr.crossVectors(zn,Lr));if(l<0)return null;const h=o*this.direction.dot(Ps.cross(zn));if(h<0||l+h>a)return null;const u=-o*zn.dot(Ls);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(e,t,n,r,s,a,o,l,h,u,c,d,f,v,g,p){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,h,u,c,d,f,v,g,p)}set(e,t,n,r,s,a,o,l,h,u,c,d,f,v,g,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=h,m[6]=u,m[10]=c,m[14]=d,m[3]=f,m[7]=v,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/wi.setFromMatrixColumn(e,0).length(),s=1/wi.setFromMatrixColumn(e,1).length(),a=1/wi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),h=Math.sin(r),u=Math.cos(s),c=Math.sin(s);if(e.order==="XYZ"){const d=a*u,f=a*c,v=o*u,g=o*c;t[0]=l*u,t[4]=-l*c,t[8]=h,t[1]=f+v*h,t[5]=d-g*h,t[9]=-o*l,t[2]=g-d*h,t[6]=v+f*h,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,f=l*c,v=h*u,g=h*c;t[0]=d+g*o,t[4]=v*o-f,t[8]=a*h,t[1]=a*c,t[5]=a*u,t[9]=-o,t[2]=f*o-v,t[6]=g+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,f=l*c,v=h*u,g=h*c;t[0]=d-g*o,t[4]=-a*c,t[8]=v+f*o,t[1]=f+v*o,t[5]=a*u,t[9]=g-d*o,t[2]=-a*h,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,f=a*c,v=o*u,g=o*c;t[0]=l*u,t[4]=v*h-f,t[8]=d*h+g,t[1]=l*c,t[5]=g*h+d,t[9]=f*h-v,t[2]=-h,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*h,v=o*l,g=o*h;t[0]=l*u,t[4]=g-d*c,t[8]=v*c+f,t[1]=c,t[5]=a*u,t[9]=-o*u,t[2]=-h*u,t[6]=f*c+v,t[10]=d-g*c}else if(e.order==="XZY"){const d=a*l,f=a*h,v=o*l,g=o*h;t[0]=l*u,t[4]=-c,t[8]=h*u,t[1]=d*c+g,t[5]=a*u,t[9]=f*c-v,t[2]=v*c-f,t[6]=o*u,t[10]=g*c+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(iu,e,ru)}lookAt(e,t,n){const r=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),Vn.crossVectors(n,Qt),Vn.lengthSq()===0&&(Math.abs(n.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),Vn.crossVectors(n,Qt)),Vn.normalize(),Ir.crossVectors(Qt,Vn),r[0]=Vn.x,r[4]=Ir.x,r[8]=Qt.x,r[1]=Vn.y,r[5]=Ir.y,r[9]=Qt.y,r[2]=Vn.z,r[6]=Ir.z,r[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],h=n[12],u=n[1],c=n[5],d=n[9],f=n[13],v=n[2],g=n[6],p=n[10],m=n[14],_=n[3],y=n[7],x=n[11],w=n[15],R=r[0],P=r[4],F=r[8],K=r[12],M=r[1],E=r[5],z=r[9],k=r[13],N=r[2],W=r[6],Z=r[10],O=r[14],I=r[3],j=r[7],Y=r[11],L=r[15];return s[0]=a*R+o*M+l*N+h*I,s[4]=a*P+o*E+l*W+h*j,s[8]=a*F+o*z+l*Z+h*Y,s[12]=a*K+o*k+l*O+h*L,s[1]=u*R+c*M+d*N+f*I,s[5]=u*P+c*E+d*W+f*j,s[9]=u*F+c*z+d*Z+f*Y,s[13]=u*K+c*k+d*O+f*L,s[2]=v*R+g*M+p*N+m*I,s[6]=v*P+g*E+p*W+m*j,s[10]=v*F+g*z+p*Z+m*Y,s[14]=v*K+g*k+p*O+m*L,s[3]=_*R+y*M+x*N+w*I,s[7]=_*P+y*E+x*W+w*j,s[11]=_*F+y*z+x*Z+w*Y,s[15]=_*K+y*k+x*O+w*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],h=e[13],u=e[2],c=e[6],d=e[10],f=e[14],v=e[3],g=e[7],p=e[11],m=e[15];return v*(+s*l*c-r*h*c-s*o*d+n*h*d+r*o*f-n*l*f)+g*(+t*l*f-t*h*d+s*a*d-r*a*f+r*h*u-s*l*u)+p*(+t*h*c-t*o*f-s*a*c+n*a*f+s*o*u-n*h*u)+m*(-r*o*u-t*l*c+t*o*d+r*a*c-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],h=e[7],u=e[8],c=e[9],d=e[10],f=e[11],v=e[12],g=e[13],p=e[14],m=e[15],_=c*p*h-g*d*h+g*l*f-o*p*f-c*l*m+o*d*m,y=v*d*h-u*p*h-v*l*f+a*p*f+u*l*m-a*d*m,x=u*g*h-v*c*h+v*o*f-a*g*f-u*o*m+a*c*m,w=v*c*l-u*g*l-v*o*d+a*g*d+u*o*p-a*c*p,R=t*_+n*y+r*x+s*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/R;return e[0]=_*P,e[1]=(g*d*s-c*p*s-g*r*f+n*p*f+c*r*m-n*d*m)*P,e[2]=(o*p*s-g*l*s+g*r*h-n*p*h-o*r*m+n*l*m)*P,e[3]=(c*l*s-o*d*s-c*r*h+n*d*h+o*r*f-n*l*f)*P,e[4]=y*P,e[5]=(u*p*s-v*d*s+v*r*f-t*p*f-u*r*m+t*d*m)*P,e[6]=(v*l*s-a*p*s-v*r*h+t*p*h+a*r*m-t*l*m)*P,e[7]=(a*d*s-u*l*s+u*r*h-t*d*h-a*r*f+t*l*f)*P,e[8]=x*P,e[9]=(v*c*s-u*g*s-v*n*f+t*g*f+u*n*m-t*c*m)*P,e[10]=(a*g*s-v*o*s+v*n*h-t*g*h-a*n*m+t*o*m)*P,e[11]=(u*o*s-a*c*s-u*n*h+t*c*h+a*n*f-t*o*f)*P,e[12]=w*P,e[13]=(u*g*r-v*c*r+v*n*d-t*g*d-u*n*p+t*c*p)*P,e[14]=(v*o*r-a*g*r-v*n*l+t*g*l+a*n*p-t*o*p)*P,e[15]=(a*c*r-u*o*r+u*n*l-t*c*l-a*n*d+t*o*d)*P,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,h=s*a,u=s*o;return this.set(h*a+n,h*o-r*l,h*l+r*o,0,h*o+r*l,u*o+n,u*l-r*a,0,h*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,h=s+s,u=a+a,c=o+o,d=s*h,f=s*u,v=s*c,g=a*u,p=a*c,m=o*c,_=l*h,y=l*u,x=l*c,w=n.x,R=n.y,P=n.z;return r[0]=(1-(g+m))*w,r[1]=(f+x)*w,r[2]=(v-y)*w,r[3]=0,r[4]=(f-x)*R,r[5]=(1-(d+m))*R,r[6]=(p+_)*R,r[7]=0,r[8]=(v+y)*P,r[9]=(p-_)*P,r[10]=(1-(d+g))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=wi.set(r[0],r[1],r[2]).length();const a=wi.set(r[4],r[5],r[6]).length(),o=wi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],un.copy(this);const h=1/s,u=1/a,c=1/o;return un.elements[0]*=h,un.elements[1]*=h,un.elements[2]*=h,un.elements[4]*=u,un.elements[5]*=u,un.elements[6]*=u,un.elements[8]*=c,un.elements[9]*=c,un.elements[10]*=c,t.setFromRotationMatrix(un),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=Dn){const l=this.elements,h=2*s/(t-e),u=2*s/(n-r),c=(t+e)/(t-e),d=(n+r)/(n-r);let f,v;if(o===Dn)f=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===os)f=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=c,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Dn){const l=this.elements,h=1/(t-e),u=1/(n-r),c=1/(a-s),d=(t+e)*h,f=(n+r)*u;let v,g;if(o===Dn)v=(a+s)*c,g=-2*c;else if(o===os)v=s*c,g=-1*c;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const wi=new Q,un=new st,iu=new Q(0,0,0),ru=new Q(1,1,1),Vn=new Q,Ir=new Q,Qt=new Q,Ao=new st,Ro=new Qn;class ds{constructor(e=0,t=0,n=0,r=ds.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],h=r[5],u=r[9],c=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-c,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-c,f),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-c,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ao.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ao,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ro.setFromEuler(this),this.setFromQuaternion(Ro,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ds.DEFAULT_ORDER="XYZ";class nc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let su=0;const Co=new Q,bi=new Qn,Rn=new st,Nr=new Q,or=new Q,au=new Q,ou=new Qn,Po=new Q(1,0,0),Lo=new Q(0,1,0),Io=new Q(0,0,1),lu={type:"added"},cu={type:"removed"};class At extends er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:su++}),this.uuid=mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new Q,t=new ds,n=new Qn,r=new Q(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new st},normalMatrix:{value:new rt}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bi.setFromAxisAngle(e,t),this.quaternion.multiply(bi),this}rotateOnWorldAxis(e,t){return bi.setFromAxisAngle(e,t),this.quaternion.premultiply(bi),this}rotateX(e){return this.rotateOnAxis(Po,e)}rotateY(e){return this.rotateOnAxis(Lo,e)}rotateZ(e){return this.rotateOnAxis(Io,e)}translateOnAxis(e,t){return Co.copy(e).applyQuaternion(this.quaternion),this.position.add(Co.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Po,e)}translateY(e){return this.translateOnAxis(Lo,e)}translateZ(e){return this.translateOnAxis(Io,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Nr.copy(e):Nr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(or,Nr,this.up):Rn.lookAt(Nr,or,this.up),this.quaternion.setFromRotationMatrix(Rn),r&&(Rn.extractRotation(r.matrixWorld),bi.setFromRotationMatrix(Rn),this.quaternion.premultiply(bi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(lu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,e,au),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,ou,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){const c=l[h];s(e.shapes,c)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),h=a(e.textures),u=a(e.images),c=a(e.shapes),d=a(e.skeletons),f=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),c.length>0&&(n.shapes=c),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),v.length>0&&(n.nodes=v)}return n.object=r,n;function a(o){const l=[];for(const h in o){const u=o[h];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}At.DEFAULT_UP=new Q(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new Q,Cn=new Q,Is=new Q,Pn=new Q,Ai=new Q,Ri=new Q,No=new Q,Ns=new Q,Ds=new Q,Us=new Q;class Mn{constructor(e=new Q,t=new Q,n=new Q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),dn.subVectors(e,t),r.cross(dn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){dn.subVectors(r,t),Cn.subVectors(n,t),Is.subVectors(e,t);const a=dn.dot(dn),o=dn.dot(Cn),l=dn.dot(Is),h=Cn.dot(Cn),u=Cn.dot(Is),c=a*h-o*o;if(c===0)return s.set(0,0,0),null;const d=1/c,f=(h*l-o*u)*d,v=(a*u-o*l)*d;return s.set(1-f-v,v,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,Pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Pn.x),l.addScaledVector(a,Pn.y),l.addScaledVector(o,Pn.z),l)}static isFrontFacing(e,t,n,r){return dn.subVectors(n,t),Cn.subVectors(e,t),dn.cross(Cn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),dn.cross(Cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Mn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Ai.subVectors(r,n),Ri.subVectors(s,n),Ns.subVectors(e,n);const l=Ai.dot(Ns),h=Ri.dot(Ns);if(l<=0&&h<=0)return t.copy(n);Ds.subVectors(e,r);const u=Ai.dot(Ds),c=Ri.dot(Ds);if(u>=0&&c<=u)return t.copy(r);const d=l*c-u*h;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ai,a);Us.subVectors(e,s);const f=Ai.dot(Us),v=Ri.dot(Us);if(v>=0&&f<=v)return t.copy(s);const g=f*h-l*v;if(g<=0&&h>=0&&v<=0)return o=h/(h-v),t.copy(n).addScaledVector(Ri,o);const p=u*v-f*c;if(p<=0&&c-u>=0&&f-v>=0)return No.subVectors(s,r),o=(c-u)/(c-u+(f-v)),t.copy(r).addScaledVector(No,o);const m=1/(p+g+d);return a=g*m,o=d*m,t.copy(n).addScaledVector(Ai,a).addScaledVector(Ri,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ic={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},Dr={h:0,s:0,l:0};function Fs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class et{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=_t.workingColorSpace){return this.r=e,this.g=t,this.b=n,_t.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=_t.workingColorSpace){if(e=Ea(e,1),t=Xt(t,0,1),n=Xt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Fs(a,s,e+1/3),this.g=Fs(a,s,e),this.b=Fs(a,s,e-1/3)}return _t.toWorkingColorSpace(this,r),this}setStyle(e,t=Ct){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){const n=ic[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}copyLinearToSRGB(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return _t.fromWorkingColorSpace(kt.copy(this),e),Math.round(Xt(kt.r*255,0,255))*65536+Math.round(Xt(kt.g*255,0,255))*256+Math.round(Xt(kt.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.fromWorkingColorSpace(kt.copy(this),t);const n=kt.r,r=kt.g,s=kt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,h;const u=(o+a)/2;if(o===a)l=0,h=0;else{const c=a-o;switch(h=u<=.5?c/(a+o):c/(2-a-o),a){case n:l=(r-s)/c+(r<s?6:0);break;case r:l=(s-n)/c+2;break;case s:l=(n-r)/c+4;break}l/=6}return e.h=l,e.s=h,e.l=u,e}getRGB(e,t=_t.workingColorSpace){return _t.fromWorkingColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=Ct){_t.fromWorkingColorSpace(kt.copy(this),e);const t=kt.r,n=kt.g,r=kt.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Hn),this.setHSL(Hn.h+e,Hn.s+t,Hn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hn),e.getHSL(Dr);const n=vr(Hn.h,Dr.h,t),r=vr(Hn.s,Dr.s,t),s=vr(Hn.l,Dr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new et;et.NAMES=ic;let hu=0;class Sn extends er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=mn(),this.name="",this.type="Material",this.blending=Gi,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ia,this.blendDst=ra,this.blendEquation=li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yi,this.stencilZFail=yi,this.stencilZPass=yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gi&&(n.blending=this.blending),this.side!==Un&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ia&&(n.blendSrc=this.blendSrc),this.blendDst!==ra&&(n.blendDst=this.blendDst),this.blendEquation!==li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ns&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Yn extends Sn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=zl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nt=new Q,Ur=new ht;class Zt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ca,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return mi("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ur.fromBufferAttribute(this,t),Ur.applyMatrix3(e),this.setXY(t,Ur.x,Ur.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),r=xt(r,this.array),s=xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ca&&(e.usage=this.usage),e}}class rc extends Zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class sc extends Zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class on extends Zt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let uu=0;const tn=new st,Bs=new At,Ci=new Q,en=new Tn,lr=new Tn,Ot=new Q;class vn extends er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=mn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jl(e)?sc:rc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new rt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,n){return tn.makeTranslation(e,t,n),this.applyMatrix4(tn),this}scale(e,t,n){return tn.makeScale(e,t,n),this.applyMatrix4(tn),this}lookAt(e){return Bs.lookAt(e),Bs.updateMatrix(),this.applyMatrix4(Bs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new on(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];en.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ln);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Q,1/0);return}if(e){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];lr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(en.min,lr.min),en.expandByPoint(Ot),Ot.addVectors(en.max,lr.max),en.expandByPoint(Ot)):(en.expandByPoint(lr.min),en.expandByPoint(lr.max))}en.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Ot.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Ot));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)Ot.fromBufferAttribute(o,h),l&&(Ci.fromBufferAttribute(e,h),Ot.add(Ci)),r=Math.max(r,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,h=[],u=[];for(let M=0;M<o;M++)h[M]=new Q,u[M]=new Q;const c=new Q,d=new Q,f=new Q,v=new ht,g=new ht,p=new ht,m=new Q,_=new Q;function y(M,E,z){c.fromArray(r,M*3),d.fromArray(r,E*3),f.fromArray(r,z*3),v.fromArray(a,M*2),g.fromArray(a,E*2),p.fromArray(a,z*2),d.sub(c),f.sub(c),g.sub(v),p.sub(v);const k=1/(g.x*p.y-p.x*g.y);isFinite(k)&&(m.copy(d).multiplyScalar(p.y).addScaledVector(f,-g.y).multiplyScalar(k),_.copy(f).multiplyScalar(g.x).addScaledVector(d,-p.x).multiplyScalar(k),h[M].add(m),h[E].add(m),h[z].add(m),u[M].add(_),u[E].add(_),u[z].add(_))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let M=0,E=x.length;M<E;++M){const z=x[M],k=z.start,N=z.count;for(let W=k,Z=k+N;W<Z;W+=3)y(n[W+0],n[W+1],n[W+2])}const w=new Q,R=new Q,P=new Q,F=new Q;function K(M){P.fromArray(s,M*3),F.copy(P);const E=h[M];w.copy(E),w.sub(P.multiplyScalar(P.dot(E))).normalize(),R.crossVectors(F,E);const k=R.dot(u[M])<0?-1:1;l[M*4]=w.x,l[M*4+1]=w.y,l[M*4+2]=w.z,l[M*4+3]=k}for(let M=0,E=x.length;M<E;++M){const z=x[M],k=z.start,N=z.count;for(let W=k,Z=k+N;W<Z;W+=3)K(n[W+0]),K(n[W+1]),K(n[W+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const r=new Q,s=new Q,a=new Q,o=new Q,l=new Q,h=new Q,u=new Q,c=new Q;if(e)for(let d=0,f=e.count;d<f;d+=3){const v=e.getX(d+0),g=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,p),u.subVectors(a,s),c.subVectors(r,s),u.cross(c),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),h.fromBufferAttribute(n,p),o.add(u),l.add(u),h.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,h.x,h.y,h.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),c.subVectors(r,s),u.cross(c),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(o,l){const h=o.array,u=o.itemSize,c=o.normalized,d=new h.constructor(l.length*u);let f=0,v=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*u;for(let m=0;m<u;m++)d[v++]=h[f++]}return new Zt(d,u,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vn,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],h=e(l,n);t.setAttribute(o,h)}const s=this.morphAttributes;for(const o in s){const l=[],h=s[o];for(let u=0,c=h.length;u<c;u++){const d=h[u],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const h=a[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const h=n[l];e.data.attributes[l]=h.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],u=[];for(let c=0,d=h.length;c<d;c++){const f=h[c];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const h in r){const u=r[h];this.setAttribute(h,u.clone(t))}const s=e.morphAttributes;for(const h in s){const u=[],c=s[h];for(let d=0,f=c.length;d<f;d++)u.push(c[d].clone(t));this.morphAttributes[h]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,u=a.length;h<u;h++){const c=a[h];this.addGroup(c.start,c.count,c.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Do=new st,ii=new us,Fr=new ln,Uo=new Q,Pi=new Q,Li=new Q,Ii=new Q,Os=new Q,Br=new Q,Or=new ht,zr=new ht,Vr=new ht,Fo=new Q,Bo=new Q,Oo=new Q,Hr=new Q,Gr=new Q;class Vt extends At{constructor(e=new vn,t=new Yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Br.set(0,0,0);for(let l=0,h=s.length;l<h;l++){const u=o[l],c=s[l];u!==0&&(Os.fromBufferAttribute(c,e),a?Br.addScaledVector(Os,u):Br.addScaledVector(Os.sub(t),u))}t.add(Br)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(s),ii.copy(e.ray).recast(e.near),!(Fr.containsPoint(ii.origin)===!1&&(ii.intersectSphere(Fr,Uo)===null||ii.origin.distanceToSquared(Uo)>(e.far-e.near)**2))&&(Do.copy(s).invert(),ii.copy(e.ray).applyMatrix4(Do),!(n.boundingBox!==null&&ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ii)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,h=s.attributes.uv,u=s.attributes.uv1,c=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,g=d.length;v<g;v++){const p=d[v],m=a[p.materialIndex],_=Math.max(p.start,f.start),y=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let x=_,w=y;x<w;x+=3){const R=o.getX(x),P=o.getX(x+1),F=o.getX(x+2);r=kr(this,m,e,n,h,u,c,R,P,F),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let p=v,m=g;p<m;p+=3){const _=o.getX(p),y=o.getX(p+1),x=o.getX(p+2);r=kr(this,a,e,n,h,u,c,_,y,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,g=d.length;v<g;v++){const p=d[v],m=a[p.materialIndex],_=Math.max(p.start,f.start),y=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let x=_,w=y;x<w;x+=3){const R=x,P=x+1,F=x+2;r=kr(this,m,e,n,h,u,c,R,P,F),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let p=v,m=g;p<m;p+=3){const _=p,y=p+1,x=p+2;r=kr(this,a,e,n,h,u,c,_,y,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function du(i,e,t,n,r,s,a,o){let l;if(e.side===Kt?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===Un,o),l===null)return null;Gr.copy(o),Gr.applyMatrix4(i.matrixWorld);const h=t.ray.origin.distanceTo(Gr);return h<t.near||h>t.far?null:{distance:h,point:Gr.clone(),object:i}}function kr(i,e,t,n,r,s,a,o,l,h){i.getVertexPosition(o,Pi),i.getVertexPosition(l,Li),i.getVertexPosition(h,Ii);const u=du(i,e,t,n,Pi,Li,Ii,Hr);if(u){r&&(Or.fromBufferAttribute(r,o),zr.fromBufferAttribute(r,l),Vr.fromBufferAttribute(r,h),u.uv=Mn.getInterpolation(Hr,Pi,Li,Ii,Or,zr,Vr,new ht)),s&&(Or.fromBufferAttribute(s,o),zr.fromBufferAttribute(s,l),Vr.fromBufferAttribute(s,h),u.uv1=Mn.getInterpolation(Hr,Pi,Li,Ii,Or,zr,Vr,new ht),u.uv2=u.uv1),a&&(Fo.fromBufferAttribute(a,o),Bo.fromBufferAttribute(a,l),Oo.fromBufferAttribute(a,h),u.normal=Mn.getInterpolation(Hr,Pi,Li,Ii,Fo,Bo,Oo,new Q),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const c={a:o,b:l,c:h,normal:new Q,materialIndex:0};Mn.getNormal(Pi,Li,Ii,c.normal),u.face=c}return u}class ei extends vn{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],h=[],u=[],c=[];let d=0,f=0;v("z","y","x",-1,-1,n,t,e,a,s,0),v("z","y","x",1,-1,n,t,-e,a,s,1),v("x","z","y",1,1,e,n,t,r,a,2),v("x","z","y",1,-1,e,n,-t,r,a,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new on(h,3)),this.setAttribute("normal",new on(u,3)),this.setAttribute("uv",new on(c,2));function v(g,p,m,_,y,x,w,R,P,F,K){const M=x/P,E=w/F,z=x/2,k=w/2,N=R/2,W=P+1,Z=F+1;let O=0,I=0;const j=new Q;for(let Y=0;Y<Z;Y++){const L=Y*E-k;for(let q=0;q<W;q++){const U=q*M-z;j[g]=U*_,j[p]=L*y,j[m]=N,h.push(j.x,j.y,j.z),j[g]=0,j[p]=0,j[m]=R>0?1:-1,u.push(j.x,j.y,j.z),c.push(q/P),c.push(1-Y/F),O+=1}}for(let Y=0;Y<F;Y++)for(let L=0;L<P;L++){const q=d+L+W*Y,U=d+L+W*(Y+1),b=d+(L+1)+W*(Y+1),A=d+(L+1)+W*Y;l.push(q,U,A),l.push(U,b,A),I+=6}o.addGroup(f,I,K),f+=I,d+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ei(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $i(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Yt(i){const e={};for(let t=0;t<i.length;t++){const n=$i(i[t]);for(const r in n)e[r]=n[r]}return e}function fu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ac(i){return i.getRenderTarget()===null?i.outputColorSpace:_t.workingColorSpace}const pu={clone:$i,merge:Yt};var mu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jn extends Sn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mu,this.fragmentShader=vu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$i(e.uniforms),this.uniformsGroups=fu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class oc extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=Dn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gn=new Q,zo=new ht,Vo=new ht;class jt extends oc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(mr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zi*2*Math.atan(Math.tan(mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z)}getViewSize(e,t){return this.getViewBounds(e,zo,Vo),t.subVectors(Vo,zo)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(mr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,h=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/h,r*=a.width/l,n*=a.height/h}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ni=-90,Di=1;class gu extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new jt(Ni,Di,e,t);r.layers=this.layers,this.add(r);const s=new jt(Ni,Di,e,t);s.layers=this.layers,this.add(s);const a=new jt(Ni,Di,e,t);a.layers=this.layers,this.add(a);const o=new jt(Ni,Di,e,t);o.layers=this.layers,this.add(o);const l=new jt(Ni,Di,e,t);l.layers=this.layers,this.add(l);const h=new jt(Ni,Di,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const h of t)this.remove(h);if(e===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===os)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,h,u]=this.children,c=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,h),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(c,d,f),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class lc extends Dt{constructor(e,t,n,r,s,a,o,l,h,u){e=e!==void 0?e:[],t=t!==void 0?t:Xi,super(e,t,n,r,s,a,o,l,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _u extends gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(mi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===pi?Ct:an),this.texture=new lc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Wt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ei(5,5,5),s=new Jn({name:"CubemapFromEquirect",uniforms:$i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:Kn});s.uniforms.tEquirect.value=t;const a=new Vt(r,s),o=t.minFilter;return t.minFilter===Nn&&(t.minFilter=Wt),new gu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const zs=new Q,xu=new Q,yu=new rt;class ai{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=zs.subVectors(n,t).cross(xu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(zs),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||yu.getNormalMatrix(e),r=this.coplanarPoint(zs).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ri=new ln,Wr=new Q;class Ta{constructor(e=new ai,t=new ai,n=new ai,r=new ai,s=new ai,a=new ai){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Dn){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],h=r[4],u=r[5],c=r[6],d=r[7],f=r[8],v=r[9],g=r[10],p=r[11],m=r[12],_=r[13],y=r[14],x=r[15];if(n[0].setComponents(l-s,d-h,p-f,x-m).normalize(),n[1].setComponents(l+s,d+h,p+f,x+m).normalize(),n[2].setComponents(l+a,d+u,p+v,x+_).normalize(),n[3].setComponents(l-a,d-u,p-v,x-_).normalize(),n[4].setComponents(l-o,d-c,p-g,x-y).normalize(),t===Dn)n[5].setComponents(l+o,d+c,p+g,x+y).normalize();else if(t===os)n[5].setComponents(o,c,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(e){return ri.center.set(0,0,0),ri.radius=.7071067811865476,ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Wr.x=r.normal.x>0?e.max.x:e.min.x,Wr.y=r.normal.y>0?e.max.y:e.min.y,Wr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function cc(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Mu(i,e){const t=e.isWebGL2,n=new WeakMap;function r(h,u){const c=h.array,d=h.usage,f=c.byteLength,v=i.createBuffer();i.bindBuffer(u,v),i.bufferData(u,c,d),h.onUploadCallback();let g;if(c instanceof Float32Array)g=i.FLOAT;else if(c instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=i.SHORT;else if(c instanceof Uint32Array)g=i.UNSIGNED_INT;else if(c instanceof Int32Array)g=i.INT;else if(c instanceof Int8Array)g=i.BYTE;else if(c instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:v,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:h.version,size:f}}function s(h,u,c){const d=u.array,f=u._updateRange,v=u.updateRanges;if(i.bindBuffer(c,h),f.count===-1&&v.length===0&&i.bufferSubData(c,0,d),v.length!==0){for(let g=0,p=v.length;g<p;g++){const m=v[g];t?i.bufferSubData(c,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):i.bufferSubData(c,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}u.clearUpdateRanges()}f.count!==-1&&(t?i.bufferSubData(c,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):i.bufferSubData(c,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function o(h){h.isInterleavedBufferAttribute&&(h=h.data);const u=n.get(h);u&&(i.deleteBuffer(u.buffer),n.delete(h))}function l(h,u){if(h.isGLBufferAttribute){const d=n.get(h);(!d||d.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const c=n.get(h);if(c===void 0)n.set(h,r(h,u));else if(c.version<h.version){if(c.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(c.buffer,h,u),c.version=h.version}}return{get:a,remove:o,update:l}}class fs extends vn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),h=o+1,u=l+1,c=e/o,d=t/l,f=[],v=[],g=[],p=[];for(let m=0;m<u;m++){const _=m*d-a;for(let y=0;y<h;y++){const x=y*c-s;v.push(x,-_,0),g.push(0,0,1),p.push(y/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<o;_++){const y=_+h*m,x=_+h*(m+1),w=_+1+h*(m+1),R=_+1+h*m;f.push(y,x,R),f.push(x,w,R)}this.setIndex(f),this.setAttribute("position",new on(v,3)),this.setAttribute("normal",new on(g,3)),this.setAttribute("uv",new on(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fs(e.width,e.height,e.widthSegments,e.heightSegments)}}var Su=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Eu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Tu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Au=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ru=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Cu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pu=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Lu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Iu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Du=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Uu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Fu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ou=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ku=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Wu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Xu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Yu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ju=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ku=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$u=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ju="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,ed=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,td=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,id=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ad=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,od=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ld=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ud=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,md=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_d=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Md=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Sd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ed=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Td=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ad=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Rd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Cd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ld=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Id=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ud=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Bd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Od=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,zd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Vd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$d=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ef=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,sf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,af=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,of=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,df=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ff=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Mf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ef=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Af=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Cf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Pf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Lf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,If=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Df=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Uf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ff=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Bf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Of=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Hf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Wf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Yf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$f=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ep=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nt={alphahash_fragment:Su,alphahash_pars_fragment:Eu,alphamap_fragment:Tu,alphamap_pars_fragment:wu,alphatest_fragment:bu,alphatest_pars_fragment:Au,aomap_fragment:Ru,aomap_pars_fragment:Cu,batching_pars_vertex:Pu,batching_vertex:Lu,begin_vertex:Iu,beginnormal_vertex:Nu,bsdfs:Du,iridescence_fragment:Uu,bumpmap_pars_fragment:Fu,clipping_planes_fragment:Bu,clipping_planes_pars_fragment:Ou,clipping_planes_pars_vertex:zu,clipping_planes_vertex:Vu,color_fragment:Hu,color_pars_fragment:Gu,color_pars_vertex:ku,color_vertex:Wu,common:Xu,cube_uv_reflection_fragment:qu,defaultnormal_vertex:Yu,displacementmap_pars_vertex:ju,displacementmap_vertex:Ku,emissivemap_fragment:Zu,emissivemap_pars_fragment:$u,colorspace_fragment:Ju,colorspace_pars_fragment:Qu,envmap_fragment:ed,envmap_common_pars_fragment:td,envmap_pars_fragment:nd,envmap_pars_vertex:id,envmap_physical_pars_fragment:md,envmap_vertex:rd,fog_vertex:sd,fog_pars_vertex:ad,fog_fragment:od,fog_pars_fragment:ld,gradientmap_pars_fragment:cd,lightmap_fragment:hd,lightmap_pars_fragment:ud,lights_lambert_fragment:dd,lights_lambert_pars_fragment:fd,lights_pars_begin:pd,lights_toon_fragment:vd,lights_toon_pars_fragment:gd,lights_phong_fragment:_d,lights_phong_pars_fragment:xd,lights_physical_fragment:yd,lights_physical_pars_fragment:Md,lights_fragment_begin:Sd,lights_fragment_maps:Ed,lights_fragment_end:Td,logdepthbuf_fragment:wd,logdepthbuf_pars_fragment:bd,logdepthbuf_pars_vertex:Ad,logdepthbuf_vertex:Rd,map_fragment:Cd,map_pars_fragment:Pd,map_particle_fragment:Ld,map_particle_pars_fragment:Id,metalnessmap_fragment:Nd,metalnessmap_pars_fragment:Dd,morphcolor_vertex:Ud,morphnormal_vertex:Fd,morphtarget_pars_vertex:Bd,morphtarget_vertex:Od,normal_fragment_begin:zd,normal_fragment_maps:Vd,normal_pars_fragment:Hd,normal_pars_vertex:Gd,normal_vertex:kd,normalmap_pars_fragment:Wd,clearcoat_normal_fragment_begin:Xd,clearcoat_normal_fragment_maps:qd,clearcoat_pars_fragment:Yd,iridescence_pars_fragment:jd,opaque_fragment:Kd,packing:Zd,premultiplied_alpha_fragment:$d,project_vertex:Jd,dithering_fragment:Qd,dithering_pars_fragment:ef,roughnessmap_fragment:tf,roughnessmap_pars_fragment:nf,shadowmap_pars_fragment:rf,shadowmap_pars_vertex:sf,shadowmap_vertex:af,shadowmask_pars_fragment:of,skinbase_vertex:lf,skinning_pars_vertex:cf,skinning_vertex:hf,skinnormal_vertex:uf,specularmap_fragment:df,specularmap_pars_fragment:ff,tonemapping_fragment:pf,tonemapping_pars_fragment:mf,transmission_fragment:vf,transmission_pars_fragment:gf,uv_pars_fragment:_f,uv_pars_vertex:xf,uv_vertex:yf,worldpos_vertex:Mf,background_vert:Sf,background_frag:Ef,backgroundCube_vert:Tf,backgroundCube_frag:wf,cube_vert:bf,cube_frag:Af,depth_vert:Rf,depth_frag:Cf,distanceRGBA_vert:Pf,distanceRGBA_frag:Lf,equirect_vert:If,equirect_frag:Nf,linedashed_vert:Df,linedashed_frag:Uf,meshbasic_vert:Ff,meshbasic_frag:Bf,meshlambert_vert:Of,meshlambert_frag:zf,meshmatcap_vert:Vf,meshmatcap_frag:Hf,meshnormal_vert:Gf,meshnormal_frag:kf,meshphong_vert:Wf,meshphong_frag:Xf,meshphysical_vert:qf,meshphysical_frag:Yf,meshtoon_vert:jf,meshtoon_frag:Kf,points_vert:Zf,points_frag:$f,shadow_vert:Jf,shadow_frag:Qf,sprite_vert:ep,sprite_frag:tp},De={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},gn={basic:{uniforms:Yt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:Yt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new et(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:Yt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:Yt([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:Yt([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new et(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:Yt([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:Yt([De.points,De.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:Yt([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:Yt([De.common,De.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:Yt([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:Yt([De.sprite,De.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:Yt([De.common,De.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:Yt([De.lights,De.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};gn.physical={uniforms:Yt([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const Xr={r:0,b:0,g:0};function np(i,e,t,n,r,s,a){const o=new et(0);let l=s===!0?0:1,h,u,c=null,d=0,f=null;function v(p,m){let _=!1,y=m.isScene===!0?m.background:null;y&&y.isTexture&&(y=(m.backgroundBlurriness>0?t:e).get(y)),y===null?g(o,l):y&&y.isColor&&(g(y,1),_=!0);const x=i.xr.getEnvironmentBlendMode();x==="additive"?n.buffers.color.setClear(0,0,0,1,a):x==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===cs)?(u===void 0&&(u=new Vt(new ei(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:$i(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=_t.getTransfer(y.colorSpace)!==St,(c!==y||d!==y.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,c=y,d=y.version,f=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(h===void 0&&(h=new Vt(new fs(2,2),new Jn({name:"BackgroundMaterial",uniforms:$i(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=y,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=_t.getTransfer(y.colorSpace)!==St,y.matrixAutoUpdate===!0&&y.updateMatrix(),h.material.uniforms.uvTransform.value.copy(y.matrix),(c!==y||d!==y.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,c=y,d=y.version,f=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null))}function g(p,m){p.getRGB(Xr,ac(i)),n.buffers.color.setClear(Xr.r,Xr.g,Xr.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(p,m=1){o.set(p),l=m,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(o,l)},render:v}}function ip(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=p(null);let h=l,u=!1;function c(N,W,Z,O,I){let j=!1;if(a){const Y=g(O,Z,W);h!==Y&&(h=Y,f(h.object)),j=m(N,O,Z,I),j&&_(N,O,Z,I)}else{const Y=W.wireframe===!0;(h.geometry!==O.id||h.program!==Z.id||h.wireframe!==Y)&&(h.geometry=O.id,h.program=Z.id,h.wireframe=Y,j=!0)}I!==null&&t.update(I,i.ELEMENT_ARRAY_BUFFER),(j||u)&&(u=!1,F(N,W,Z,O),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function d(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function f(N){return n.isWebGL2?i.bindVertexArray(N):s.bindVertexArrayOES(N)}function v(N){return n.isWebGL2?i.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function g(N,W,Z){const O=Z.wireframe===!0;let I=o[N.id];I===void 0&&(I={},o[N.id]=I);let j=I[W.id];j===void 0&&(j={},I[W.id]=j);let Y=j[O];return Y===void 0&&(Y=p(d()),j[O]=Y),Y}function p(N){const W=[],Z=[],O=[];for(let I=0;I<r;I++)W[I]=0,Z[I]=0,O[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:Z,attributeDivisors:O,object:N,attributes:{},index:null}}function m(N,W,Z,O){const I=h.attributes,j=W.attributes;let Y=0;const L=Z.getAttributes();for(const q in L)if(L[q].location>=0){const b=I[q];let A=j[q];if(A===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(A=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(A=N.instanceColor)),b===void 0||b.attribute!==A||A&&b.data!==A.data)return!0;Y++}return h.attributesNum!==Y||h.index!==O}function _(N,W,Z,O){const I={},j=W.attributes;let Y=0;const L=Z.getAttributes();for(const q in L)if(L[q].location>=0){let b=j[q];b===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(b=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(b=N.instanceColor));const A={};A.attribute=b,b&&b.data&&(A.data=b.data),I[q]=A,Y++}h.attributes=I,h.attributesNum=Y,h.index=O}function y(){const N=h.newAttributes;for(let W=0,Z=N.length;W<Z;W++)N[W]=0}function x(N){w(N,0)}function w(N,W){const Z=h.newAttributes,O=h.enabledAttributes,I=h.attributeDivisors;Z[N]=1,O[N]===0&&(i.enableVertexAttribArray(N),O[N]=1),I[N]!==W&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,W),I[N]=W)}function R(){const N=h.newAttributes,W=h.enabledAttributes;for(let Z=0,O=W.length;Z<O;Z++)W[Z]!==N[Z]&&(i.disableVertexAttribArray(Z),W[Z]=0)}function P(N,W,Z,O,I,j,Y){Y===!0?i.vertexAttribIPointer(N,W,Z,I,j):i.vertexAttribPointer(N,W,Z,O,I,j)}function F(N,W,Z,O){if(n.isWebGL2===!1&&(N.isInstancedMesh||O.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const I=O.attributes,j=Z.getAttributes(),Y=W.defaultAttributeValues;for(const L in j){const q=j[L];if(q.location>=0){let U=I[L];if(U===void 0&&(L==="instanceMatrix"&&N.instanceMatrix&&(U=N.instanceMatrix),L==="instanceColor"&&N.instanceColor&&(U=N.instanceColor)),U!==void 0){const b=U.normalized,A=U.itemSize,G=t.get(U);if(G===void 0)continue;const ie=G.buffer,te=G.type,X=G.bytesPerElement,se=n.isWebGL2===!0&&(te===i.INT||te===i.UNSIGNED_INT||U.gpuType===Hl);if(U.isInterleavedBufferAttribute){const ce=U.data,H=ce.stride,Ae=U.offset;if(ce.isInstancedInterleavedBuffer){for(let ue=0;ue<q.locationSize;ue++)w(q.location+ue,ce.meshPerAttribute);N.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ue=0;ue<q.locationSize;ue++)x(q.location+ue);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let ue=0;ue<q.locationSize;ue++)P(q.location+ue,A/q.locationSize,te,b,H*X,(Ae+A/q.locationSize*ue)*X,se)}else{if(U.isInstancedBufferAttribute){for(let ce=0;ce<q.locationSize;ce++)w(q.location+ce,U.meshPerAttribute);N.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let ce=0;ce<q.locationSize;ce++)x(q.location+ce);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let ce=0;ce<q.locationSize;ce++)P(q.location+ce,A/q.locationSize,te,b,A*X,A/q.locationSize*ce*X,se)}}else if(Y!==void 0){const b=Y[L];if(b!==void 0)switch(b.length){case 2:i.vertexAttrib2fv(q.location,b);break;case 3:i.vertexAttrib3fv(q.location,b);break;case 4:i.vertexAttrib4fv(q.location,b);break;default:i.vertexAttrib1fv(q.location,b)}}}}R()}function K(){z();for(const N in o){const W=o[N];for(const Z in W){const O=W[Z];for(const I in O)v(O[I].object),delete O[I];delete W[Z]}delete o[N]}}function M(N){if(o[N.id]===void 0)return;const W=o[N.id];for(const Z in W){const O=W[Z];for(const I in O)v(O[I].object),delete O[I];delete W[Z]}delete o[N.id]}function E(N){for(const W in o){const Z=o[W];if(Z[N.id]===void 0)continue;const O=Z[N.id];for(const I in O)v(O[I].object),delete O[I];delete Z[N.id]}}function z(){k(),u=!0,h!==l&&(h=l,f(h.object))}function k(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:c,reset:z,resetDefaultState:k,dispose:K,releaseStatesOfGeometry:M,releaseStatesOfProgram:E,initAttributes:y,enableAttribute:x,disableUnusedAttributes:R}}function rp(i,e,t,n){const r=n.isWebGL2;let s;function a(u){s=u}function o(u,c){i.drawArrays(s,u,c),t.update(c,s,1)}function l(u,c,d){if(d===0)return;let f,v;if(r)f=i,v="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[v](s,u,c,d),t.update(c,s,d)}function h(u,c,d){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let v=0;v<d;v++)this.render(u[v],c[v]);else{f.multiDrawArraysWEBGL(s,u,0,c,0,d);let v=0;for(let g=0;g<d;g++)v+=c[g];t.update(v,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=h}function sp(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const h=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,c=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),m=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,x=a||e.has("OES_texture_float"),w=y&&x,R=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:h,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:c,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:_,vertexTextures:y,floatFragmentTextures:x,floatVertexTextures:w,maxSamples:R}}function ap(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new ai,o=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,d){const f=c.length!==0||d||n!==0||r;return r=d,n=c.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(c,d){t=u(c,d,0)},this.setState=function(c,d,f){const v=c.clippingPlanes,g=c.clipIntersection,p=c.clipShadows,m=i.get(c);if(!r||v===null||v.length===0||s&&!p)s?u(null):h();else{const _=s?0:n,y=_*4;let x=m.clippingState||null;l.value=x,x=u(v,d,y,f);for(let w=0;w!==y;++w)x[w]=t[w];m.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function h(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(c,d,f,v){const g=c!==null?c.length:0;let p=null;if(g!==0){if(p=l.value,v!==!0||p===null){const m=f+g*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,x=f;y!==g;++y,x+=4)a.copy(c[y]).applyMatrix4(_,o),a.normal.toArray(p,x),p[x+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function op(i){let e=new WeakMap;function t(a,o){return o===sa?a.mapping=Xi:o===aa&&(a.mapping=qi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===sa||o===aa)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const h=new _u(l.height);return h.fromEquirectangularTexture(i,a),e.set(a,h),a.addEventListener("dispose",r),t(h.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class wa extends oc{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,a=s+h*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const zi=4,Ho=[.125,.215,.35,.446,.526,.582],ci=20,Vs=new wa,Go=new et;let Hs=null,Gs=0,ks=0;const oi=(1+Math.sqrt(5))/2,Ui=1/oi,ko=[new Q(1,1,1),new Q(-1,1,1),new Q(1,1,-1),new Q(-1,1,-1),new Q(0,oi,Ui),new Q(0,oi,-Ui),new Q(Ui,0,oi),new Q(-Ui,0,oi),new Q(oi,Ui,0),new Q(-oi,Ui,0)];class Wo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Hs=this._renderer.getRenderTarget(),Gs=this._renderer.getActiveCubeFace(),ks=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hs,Gs,ks),e.scissorTest=!1,qr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xi||e.mapping===qi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hs=this._renderer.getRenderTarget(),Gs=this._renderer.getActiveCubeFace(),ks=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:xr,format:sn,colorSpace:Ht,depthBuffer:!1},r=Xo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xo(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lp(s)),this._blurMaterial=cp(s,e,t)}return r}_compileMaterial(e){const t=new Vt(this._lodPlanes[0],e);this._renderer.compile(t,Vs)}_sceneToCubeUV(e,t,n,r){const o=new jt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,c=u.autoClear,d=u.toneMapping;u.getClearColor(Go),u.toneMapping=Zn,u.autoClear=!1;const f=new Yn({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),v=new Vt(new ei,f);let g=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,g=!0):(f.color.copy(Go),g=!0);for(let m=0;m<6;m++){const _=m%3;_===0?(o.up.set(0,l[m],0),o.lookAt(h[m],0,0)):_===1?(o.up.set(0,0,l[m]),o.lookAt(0,h[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,h[m]));const y=this._cubeSize;qr(r,_*y,m>2?y:0,y,y),u.setRenderTarget(r),g&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=c,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Xi||e.mapping===qi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qo());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Vt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;qr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Vs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ko[(r-1)%ko.length];this._blur(e,r-1,r,s,a)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,c=new Vt(this._lodPlanes[r],h),d=h.uniforms,f=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*ci-1),g=s/v,p=isFinite(s)?1+Math.floor(u*g):ci;p>ci&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ci}`);const m=[];let _=0;for(let P=0;P<ci;++P){const F=P/g,K=Math.exp(-F*F/2);m.push(K),P===0?_+=K:P<p&&(_+=2*K)}for(let P=0;P<m.length;P++)m[P]=m[P]/_;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=v,d.mipInt.value=y-n;const x=this._sizeLods[r],w=3*x*(r>y-zi?r-y+zi:0),R=4*(this._cubeSize-x);qr(t,w,R,3*x,2*x),l.setRenderTarget(t),l.render(c,Vs)}}function lp(i){const e=[],t=[],n=[];let r=i;const s=i-zi+1+Ho.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-zi?l=Ho[a-i+zi-1]:a===0&&(l=0),n.push(l);const h=1/(o-2),u=-h,c=1+h,d=[u,u,c,u,c,c,u,u,c,c,u,c],f=6,v=6,g=3,p=2,m=1,_=new Float32Array(g*v*f),y=new Float32Array(p*v*f),x=new Float32Array(m*v*f);for(let R=0;R<f;R++){const P=R%3*2/3-1,F=R>2?0:-1,K=[P,F,0,P+2/3,F,0,P+2/3,F+1,0,P,F,0,P+2/3,F+1,0,P,F+1,0];_.set(K,g*v*R),y.set(d,p*v*R);const M=[R,R,R,R,R,R];x.set(M,m*v*R)}const w=new vn;w.setAttribute("position",new Zt(_,g)),w.setAttribute("uv",new Zt(y,p)),w.setAttribute("faceIndex",new Zt(x,m)),e.push(w),r>zi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Xo(i,e,t){const n=new gi(i,e,t);return n.texture.mapping=cs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function cp(i,e,t){const n=new Float32Array(ci),r=new Q(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:ci,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function qo(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Yo(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function ba(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hp(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,h=l===sa||l===aa,u=l===Xi||l===qi;if(h||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let c=e.get(o);return t===null&&(t=new Wo(i)),c=h?t.fromEquirectangular(o,c):t.fromCubemap(o,c),e.set(o,c),c.texture}else{if(e.has(o))return e.get(o).texture;{const c=o.image;if(h&&c&&c.height>0||u&&c&&r(c)){t===null&&(t=new Wo(i));const d=h?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let l=0;const h=6;for(let u=0;u<h;u++)o[u]!==void 0&&l++;return l===h}function s(o){const l=o.target;l.removeEventListener("dispose",s);const h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function up(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function dp(i,e,t,n){const r={},s=new WeakMap;function a(c){const d=c.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const g=d.morphAttributes[v];for(let p=0,m=g.length;p<m;p++)e.remove(g[p])}d.removeEventListener("dispose",a),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(c,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(c){const d=c.attributes;for(const v in d)e.update(d[v],i.ARRAY_BUFFER);const f=c.morphAttributes;for(const v in f){const g=f[v];for(let p=0,m=g.length;p<m;p++)e.update(g[p],i.ARRAY_BUFFER)}}function h(c){const d=[],f=c.index,v=c.attributes.position;let g=0;if(f!==null){const _=f.array;g=f.version;for(let y=0,x=_.length;y<x;y+=3){const w=_[y+0],R=_[y+1],P=_[y+2];d.push(w,R,R,P,P,w)}}else if(v!==void 0){const _=v.array;g=v.version;for(let y=0,x=_.length/3-1;y<x;y+=3){const w=y+0,R=y+1,P=y+2;d.push(w,R,R,P,P,w)}}else return;const p=new(Jl(d)?sc:rc)(d,1);p.version=g;const m=s.get(c);m&&e.remove(m),s.set(c,p)}function u(c){const d=s.get(c);if(d){const f=c.index;f!==null&&d.version<f.version&&h(c)}else h(c);return s.get(c)}return{get:o,update:l,getWireframeAttribute:u}}function fp(i,e,t,n){const r=n.isWebGL2;let s;function a(f){s=f}let o,l;function h(f){o=f.type,l=f.bytesPerElement}function u(f,v){i.drawElements(s,v,o,f*l),t.update(v,s,1)}function c(f,v,g){if(g===0)return;let p,m;if(r)p=i,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,v,o,f*l,g),t.update(v,s,g)}function d(f,v,g){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<g;m++)this.render(f[m]/l,v[m]);else{p.multiDrawElementsWEBGL(s,v,0,o,f,0,g);let m=0;for(let _=0;_<g;_++)m+=v[_];t.update(m,s,1)}}this.setMode=a,this.setIndex=h,this.render=u,this.renderInstances=c,this.renderMultiDraw=d}function pp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function mp(i,e){return i[0]-e[0]}function vp(i,e){return Math.abs(e[1])-Math.abs(i[1])}function gp(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,a=new Mt,o=[];for(let h=0;h<8;h++)o[h]=[h,0];function l(h,u,c){const d=h.morphTargetInfluences;if(e.isWebGL2===!0){const v=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=v!==void 0?v.length:0;let p=s.get(u);if(p===void 0||p.count!==g){let W=function(){k.dispose(),s.delete(u),u.removeEventListener("dispose",W)};var f=W;p!==void 0&&p.texture.dispose();const y=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],F=u.morphAttributes.color||[];let K=0;y===!0&&(K=1),x===!0&&(K=2),w===!0&&(K=3);let M=u.attributes.position.count*K,E=1;M>e.maxTextureSize&&(E=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const z=new Float32Array(M*E*4*g),k=new tc(z,M,E,g);k.type=yn,k.needsUpdate=!0;const N=K*4;for(let Z=0;Z<g;Z++){const O=R[Z],I=P[Z],j=F[Z],Y=M*E*4*Z;for(let L=0;L<O.count;L++){const q=L*N;y===!0&&(a.fromBufferAttribute(O,L),z[Y+q+0]=a.x,z[Y+q+1]=a.y,z[Y+q+2]=a.z,z[Y+q+3]=0),x===!0&&(a.fromBufferAttribute(I,L),z[Y+q+4]=a.x,z[Y+q+5]=a.y,z[Y+q+6]=a.z,z[Y+q+7]=0),w===!0&&(a.fromBufferAttribute(j,L),z[Y+q+8]=a.x,z[Y+q+9]=a.y,z[Y+q+10]=a.z,z[Y+q+11]=j.itemSize===4?a.w:1)}}p={count:g,texture:k,size:new ht(M,E)},s.set(u,p),u.addEventListener("dispose",W)}let m=0;for(let y=0;y<d.length;y++)m+=d[y];const _=u.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",d),c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const v=d===void 0?0:d.length;let g=n[u.id];if(g===void 0||g.length!==v){g=[];for(let x=0;x<v;x++)g[x]=[x,0];n[u.id]=g}for(let x=0;x<v;x++){const w=g[x];w[0]=x,w[1]=d[x]}g.sort(vp);for(let x=0;x<8;x++)x<v&&g[x][1]?(o[x][0]=g[x][0],o[x][1]=g[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(mp);const p=u.morphAttributes.position,m=u.morphAttributes.normal;let _=0;for(let x=0;x<8;x++){const w=o[x],R=w[0],P=w[1];R!==Number.MAX_SAFE_INTEGER&&P?(p&&u.getAttribute("morphTarget"+x)!==p[R]&&u.setAttribute("morphTarget"+x,p[R]),m&&u.getAttribute("morphNormal"+x)!==m[R]&&u.setAttribute("morphNormal"+x,m[R]),r[x]=P,_+=P):(p&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),m&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),r[x]=0)}const y=u.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",y),c.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function _p(i,e,t,n){let r=new WeakMap;function s(l){const h=n.render.frame,u=l.geometry,c=e.get(l,u);if(r.get(c)!==h&&(e.update(c),r.set(c,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return c}function a(){r=new WeakMap}function o(l){const h=l.target;h.removeEventListener("dispose",o),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:a}}class hc extends Dt{constructor(e,t,n,r,s,a,o,l,h,u){if(u=u!==void 0?u:fi,u!==fi&&u!==ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===fi&&(n=qn),n===void 0&&u===ji&&(n=di),super(null,r,s,a,o,l,u,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:zt,this.minFilter=l!==void 0?l:zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const uc=new Dt,dc=new hc(1,1);dc.compareFunction=$l;const fc=new tc,pc=new tu,mc=new lc,jo=[],Ko=[],Zo=new Float32Array(16),$o=new Float32Array(9),Jo=new Float32Array(4);function tr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=jo[r];if(s===void 0&&(s=new Float32Array(r),jo[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Ut(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ft(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ps(i,e){let t=Ko[e];t===void 0&&(t=new Int32Array(e),Ko[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function xp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function yp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2fv(this.addr,e),Ft(t,e)}}function Mp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;i.uniform3fv(this.addr,e),Ft(t,e)}}function Sp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4fv(this.addr,e),Ft(t,e)}}function Ep(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,n))return;Jo.set(n),i.uniformMatrix2fv(this.addr,!1,Jo),Ft(t,n)}}function Tp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,n))return;$o.set(n),i.uniformMatrix3fv(this.addr,!1,$o),Ft(t,n)}}function wp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,n))return;Zo.set(n),i.uniformMatrix4fv(this.addr,!1,Zo),Ft(t,n)}}function bp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ap(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2iv(this.addr,e),Ft(t,e)}}function Rp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3iv(this.addr,e),Ft(t,e)}}function Cp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4iv(this.addr,e),Ft(t,e)}}function Pp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Lp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2uiv(this.addr,e),Ft(t,e)}}function Ip(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3uiv(this.addr,e),Ft(t,e)}}function Np(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4uiv(this.addr,e),Ft(t,e)}}function Dp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?dc:uc;t.setTexture2D(e||s,r)}function Up(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||pc,r)}function Fp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||mc,r)}function Bp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||fc,r)}function Op(i){switch(i){case 5126:return xp;case 35664:return yp;case 35665:return Mp;case 35666:return Sp;case 35674:return Ep;case 35675:return Tp;case 35676:return wp;case 5124:case 35670:return bp;case 35667:case 35671:return Ap;case 35668:case 35672:return Rp;case 35669:case 35673:return Cp;case 5125:return Pp;case 36294:return Lp;case 36295:return Ip;case 36296:return Np;case 35678:case 36198:case 36298:case 36306:case 35682:return Dp;case 35679:case 36299:case 36307:return Up;case 35680:case 36300:case 36308:case 36293:return Fp;case 36289:case 36303:case 36311:case 36292:return Bp}}function zp(i,e){i.uniform1fv(this.addr,e)}function Vp(i,e){const t=tr(e,this.size,2);i.uniform2fv(this.addr,t)}function Hp(i,e){const t=tr(e,this.size,3);i.uniform3fv(this.addr,t)}function Gp(i,e){const t=tr(e,this.size,4);i.uniform4fv(this.addr,t)}function kp(i,e){const t=tr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Wp(i,e){const t=tr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Xp(i,e){const t=tr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function qp(i,e){i.uniform1iv(this.addr,e)}function Yp(i,e){i.uniform2iv(this.addr,e)}function jp(i,e){i.uniform3iv(this.addr,e)}function Kp(i,e){i.uniform4iv(this.addr,e)}function Zp(i,e){i.uniform1uiv(this.addr,e)}function $p(i,e){i.uniform2uiv(this.addr,e)}function Jp(i,e){i.uniform3uiv(this.addr,e)}function Qp(i,e){i.uniform4uiv(this.addr,e)}function em(i,e,t){const n=this.cache,r=e.length,s=ps(t,r);Ut(n,s)||(i.uniform1iv(this.addr,s),Ft(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||uc,s[a])}function tm(i,e,t){const n=this.cache,r=e.length,s=ps(t,r);Ut(n,s)||(i.uniform1iv(this.addr,s),Ft(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||pc,s[a])}function nm(i,e,t){const n=this.cache,r=e.length,s=ps(t,r);Ut(n,s)||(i.uniform1iv(this.addr,s),Ft(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||mc,s[a])}function im(i,e,t){const n=this.cache,r=e.length,s=ps(t,r);Ut(n,s)||(i.uniform1iv(this.addr,s),Ft(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||fc,s[a])}function rm(i){switch(i){case 5126:return zp;case 35664:return Vp;case 35665:return Hp;case 35666:return Gp;case 35674:return kp;case 35675:return Wp;case 35676:return Xp;case 5124:case 35670:return qp;case 35667:case 35671:return Yp;case 35668:case 35672:return jp;case 35669:case 35673:return Kp;case 5125:return Zp;case 36294:return $p;case 36295:return Jp;case 36296:return Qp;case 35678:case 36198:case 36298:case 36306:case 35682:return em;case 35679:case 36299:case 36307:return tm;case 35680:case 36300:case 36308:case 36293:return nm;case 36289:case 36303:case 36311:case 36292:return im}}class sm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Op(t.type)}}class am{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rm(t.type)}}class om{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Ws=/(\w+)(\])?(\[|\.)?/g;function Qo(i,e){i.seq.push(e),i.map[e.id]=e}function lm(i,e,t){const n=i.name,r=n.length;for(Ws.lastIndex=0;;){const s=Ws.exec(n),a=Ws.lastIndex;let o=s[1];const l=s[2]==="]",h=s[3];if(l&&(o=o|0),h===void 0||h==="["&&a+2===r){Qo(t,h===void 0?new sm(o,i,e):new am(o,i,e));break}else{let c=t.map[o];c===void 0&&(c=new om(o),Qo(t,c)),t=c}}}class ts{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);lm(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function el(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const cm=37297;let hm=0;function um(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function dm(i){const e=_t.getPrimaries(_t.workingColorSpace),t=_t.getPrimaries(i);let n;switch(e===t?n="":e===as&&t===ss?n="LinearDisplayP3ToLinearSRGB":e===ss&&t===as&&(n="LinearSRGBToLinearDisplayP3"),i){case Ht:case hs:return[n,"LinearTransferOETF"];case Ct:case Sa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function tl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+um(i.getShaderSource(e),a)}else return r}function fm(i,e){const t=dm(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function pm(i,e){let t;switch(e){case lh:t="Linear";break;case ch:t="Reinhard";break;case hh:t="OptimizedCineon";break;case uh:t="ACESFilmic";break;case fh:t="AgX";break;case dh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function mm(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Vi).join(`
`)}function vm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vi).join(`
`)}function gm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function _m(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Vi(i){return i!==""}function nl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function il(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xm=/^[ \t]*#include +<([\w\d./]+)>/gm;function da(i){return i.replace(xm,Mm)}const ym=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Mm(i,e){let t=nt[e];if(t===void 0){const n=ym.get(e);if(n!==void 0)t=nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return da(t)}const Sm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rl(i){return i.replace(Sm,Em)}function Em(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function sl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	`;return i.isWebGL2&&(e+=`precision ${i.precision} sampler3D;
		precision ${i.precision} sampler2DArray;
		precision ${i.precision} sampler2DShadow;
		precision ${i.precision} samplerCubeShadow;
		precision ${i.precision} sampler2DArrayShadow;
		precision ${i.precision} isampler2D;
		precision ${i.precision} isampler3D;
		precision ${i.precision} isamplerCube;
		precision ${i.precision} isampler2DArray;
		precision ${i.precision} usampler2D;
		precision ${i.precision} usampler3D;
		precision ${i.precision} usamplerCube;
		precision ${i.precision} usampler2DArray;
		`),i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Tm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ol?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Fc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===In&&(e="SHADOWMAP_TYPE_VSM"),e}function wm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Xi:case qi:e="ENVMAP_TYPE_CUBE";break;case cs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case qi:e="ENVMAP_MODE_REFRACTION";break}return e}function Am(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case zl:e="ENVMAP_BLENDING_MULTIPLY";break;case ah:e="ENVMAP_BLENDING_MIX";break;case oh:e="ENVMAP_BLENDING_ADD";break}return e}function Rm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Cm(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Tm(t),h=wm(t),u=bm(t),c=Am(t),d=Rm(t),f=t.isWebGL2?"":mm(t),v=vm(t),g=gm(s),p=r.createProgram();let m,_,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Vi).join(`
`),m.length>0&&(m+=`
`),_=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Vi).join(`
`),_.length>0&&(_+=`
`)):(m=[sl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vi).join(`
`),_=[f,sl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zn?"#define TONE_MAPPING":"",t.toneMapping!==Zn?nt.tonemapping_pars_fragment:"",t.toneMapping!==Zn?pm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,fm("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vi).join(`
`)),a=da(a),a=nl(a,t),a=il(a,t),o=da(o),o=nl(o,t),o=il(o,t),a=rl(a),o=rl(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Mo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=y+m+a,w=y+_+o,R=el(r,r.VERTEX_SHADER,x),P=el(r,r.FRAGMENT_SHADER,w);r.attachShader(p,R),r.attachShader(p,P),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function F(z){if(i.debug.checkShaderErrors){const k=r.getProgramInfoLog(p).trim(),N=r.getShaderInfoLog(R).trim(),W=r.getShaderInfoLog(P).trim();let Z=!0,O=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,p,R,P);else{const I=tl(r,R,"vertex"),j=tl(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+k+`
`+I+`
`+j)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(N===""||W==="")&&(O=!1);O&&(z.diagnostics={runnable:Z,programLog:k,vertexShader:{log:N,prefix:m},fragmentShader:{log:W,prefix:_}})}r.deleteShader(R),r.deleteShader(P),K=new ts(r,p),M=_m(r,p)}let K;this.getUniforms=function(){return K===void 0&&F(this),K};let M;this.getAttributes=function(){return M===void 0&&F(this),M};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(p,cm)),E},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hm++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=R,this.fragmentShader=P,this}let Pm=0;class Lm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Im(e),t.set(e,n)),n}}class Im{constructor(e){this.id=Pm++,this.code=e,this.usedTimes=0}}function Nm(i,e,t,n,r,s,a){const o=new nc,l=new Lm,h=new Set,u=[],c=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let v=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M){return h.add(M),M===0?"uv":`uv${M}`}function m(M,E,z,k,N){const W=k.fog,Z=N.geometry,O=M.isMeshStandardMaterial?k.environment:null,I=(M.isMeshStandardMaterial?t:e).get(M.envMap||O),j=I&&I.mapping===cs?I.image.height:null,Y=g[M.type];M.precision!==null&&(v=r.getMaxPrecision(M.precision),v!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",v,"instead."));const L=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,q=L!==void 0?L.length:0;let U=0;Z.morphAttributes.position!==void 0&&(U=1),Z.morphAttributes.normal!==void 0&&(U=2),Z.morphAttributes.color!==void 0&&(U=3);let b,A,G,ie;if(Y){const mt=gn[Y];b=mt.vertexShader,A=mt.fragmentShader}else b=M.vertexShader,A=M.fragmentShader,l.update(M),G=l.getVertexShaderID(M),ie=l.getFragmentShaderID(M);const te=i.getRenderTarget(),X=N.isInstancedMesh===!0,se=N.isBatchedMesh===!0,ce=!!M.map,H=!!M.matcap,Ae=!!I,ue=!!M.aoMap,re=!!M.lightMap,ae=!!M.bumpMap,We=!!M.normalMap,be=!!M.displacementMap,C=!!M.emissiveMap,S=!!M.metalnessMap,ee=!!M.roughnessMap,de=M.anisotropy>0,he=M.clearcoat>0,pe=M.iridescence>0,Me=M.sheen>0,xe=M.transmission>0,ye=de&&!!M.anisotropyMap,ze=he&&!!M.clearcoatMap,je=he&&!!M.clearcoatNormalMap,ge=he&&!!M.clearcoatRoughnessMap,at=pe&&!!M.iridescenceMap,Qe=pe&&!!M.iridescenceThicknessMap,qe=Me&&!!M.sheenColorMap,He=Me&&!!M.sheenRoughnessMap,Be=!!M.specularMap,Je=!!M.specularColorMap,tt=!!M.specularIntensityMap,ot=xe&&!!M.transmissionMap,$e=xe&&!!M.thicknessMap,it=!!M.gradientMap,D=!!M.alphaMap,_e=M.alphaTest>0,Se=!!M.alphaHash,Ve=!!M.extensions;let Xe=Zn;M.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Xe=i.toneMapping);const ut={isWebGL2:c,shaderID:Y,shaderType:M.type,shaderName:M.name,vertexShader:b,fragmentShader:A,defines:M.defines,customVertexShaderID:G,customFragmentShaderID:ie,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:v,batching:se,instancing:X,instancingColor:X&&N.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Ht,alphaToCoverage:!!M.alphaToCoverage,map:ce,matcap:H,envMap:Ae,envMapMode:Ae&&I.mapping,envMapCubeUVHeight:j,aoMap:ue,lightMap:re,bumpMap:ae,normalMap:We,displacementMap:f&&be,emissiveMap:C,normalMapObjectSpace:We&&M.normalMapType===Ah,normalMapTangentSpace:We&&M.normalMapType===Zl,metalnessMap:S,roughnessMap:ee,anisotropy:de,anisotropyMap:ye,clearcoat:he,clearcoatMap:ze,clearcoatNormalMap:je,clearcoatRoughnessMap:ge,iridescence:pe,iridescenceMap:at,iridescenceThicknessMap:Qe,sheen:Me,sheenColorMap:qe,sheenRoughnessMap:He,specularMap:Be,specularColorMap:Je,specularIntensityMap:tt,transmission:xe,transmissionMap:ot,thicknessMap:$e,gradientMap:it,opaque:M.transparent===!1&&M.blending===Gi&&M.alphaToCoverage===!1,alphaMap:D,alphaTest:_e,alphaHash:Se,combine:M.combine,mapUv:ce&&p(M.map.channel),aoMapUv:ue&&p(M.aoMap.channel),lightMapUv:re&&p(M.lightMap.channel),bumpMapUv:ae&&p(M.bumpMap.channel),normalMapUv:We&&p(M.normalMap.channel),displacementMapUv:be&&p(M.displacementMap.channel),emissiveMapUv:C&&p(M.emissiveMap.channel),metalnessMapUv:S&&p(M.metalnessMap.channel),roughnessMapUv:ee&&p(M.roughnessMap.channel),anisotropyMapUv:ye&&p(M.anisotropyMap.channel),clearcoatMapUv:ze&&p(M.clearcoatMap.channel),clearcoatNormalMapUv:je&&p(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&p(M.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&p(M.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&p(M.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&p(M.sheenColorMap.channel),sheenRoughnessMapUv:He&&p(M.sheenRoughnessMap.channel),specularMapUv:Be&&p(M.specularMap.channel),specularColorMapUv:Je&&p(M.specularColorMap.channel),specularIntensityMapUv:tt&&p(M.specularIntensityMap.channel),transmissionMapUv:ot&&p(M.transmissionMap.channel),thicknessMapUv:$e&&p(M.thicknessMap.channel),alphaMapUv:D&&p(M.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(We||de),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!Z.attributes.uv&&(ce||D),fog:!!W,useFog:M.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:N.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:U,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xe,useLegacyLights:i._useLegacyLights,decodeVideoTexture:ce&&M.map.isVideoTexture===!0&&_t.getTransfer(M.map.colorSpace)===St,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===xn,flipSided:M.side===Kt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:Ve&&M.extensions.derivatives===!0,extensionFragDepth:Ve&&M.extensions.fragDepth===!0,extensionDrawBuffers:Ve&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ve&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ve&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ve&&M.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:c||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ut.vertexUv1s=h.has(1),ut.vertexUv2s=h.has(2),ut.vertexUv3s=h.has(3),h.clear(),ut}function _(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const z in M.defines)E.push(z),E.push(M.defines[z]);return M.isRawShaderMaterial===!1&&(y(E,M),x(E,M),E.push(i.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function y(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function x(M,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),M.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.alphaToCoverage&&o.enable(20),M.push(o.mask)}function w(M){const E=g[M.type];let z;if(E){const k=gn[E];z=pu.clone(k.uniforms)}else z=M.uniforms;return z}function R(M,E){let z;for(let k=0,N=u.length;k<N;k++){const W=u[k];if(W.cacheKey===E){z=W,++z.usedTimes;break}}return z===void 0&&(z=new Cm(i,E,M,s),u.push(z)),z}function P(M){if(--M.usedTimes===0){const E=u.indexOf(M);u[E]=u[u.length-1],u.pop(),M.destroy()}}function F(M){l.remove(M)}function K(){l.dispose()}return{getParameters:m,getProgramCacheKey:_,getUniforms:w,acquireProgram:R,releaseProgram:P,releaseShaderCache:F,programs:u,dispose:K}}function Dm(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Um(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function al(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ol(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(c,d,f,v,g,p){let m=i[e];return m===void 0?(m={id:c.id,object:c,geometry:d,material:f,groupOrder:v,renderOrder:c.renderOrder,z:g,group:p},i[e]=m):(m.id=c.id,m.object=c,m.geometry=d,m.material=f,m.groupOrder=v,m.renderOrder=c.renderOrder,m.z=g,m.group=p),e++,m}function o(c,d,f,v,g,p){const m=a(c,d,f,v,g,p);f.transmission>0?n.push(m):f.transparent===!0?r.push(m):t.push(m)}function l(c,d,f,v,g,p){const m=a(c,d,f,v,g,p);f.transmission>0?n.unshift(m):f.transparent===!0?r.unshift(m):t.unshift(m)}function h(c,d){t.length>1&&t.sort(c||Um),n.length>1&&n.sort(d||al),r.length>1&&r.sort(d||al)}function u(){for(let c=e,d=i.length;c<d;c++){const f=i[c];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:h}}function Fm(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new ol,i.set(n,[a])):r>=s.length?(a=new ol,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Bm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Q,color:new et};break;case"SpotLight":t={position:new Q,direction:new Q,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Q,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Q,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return i[e.id]=t,t}}}function Om(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let zm=0;function Vm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Hm(i,e){const t=new Bm,n=Om(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new Q);const s=new Q,a=new st,o=new st;function l(u,c){let d=0,f=0,v=0;for(let z=0;z<9;z++)r.probe[z].set(0,0,0);let g=0,p=0,m=0,_=0,y=0,x=0,w=0,R=0,P=0,F=0,K=0;u.sort(Vm);const M=c===!0?Math.PI:1;for(let z=0,k=u.length;z<k;z++){const N=u[z],W=N.color,Z=N.intensity,O=N.distance,I=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=W.r*Z*M,f+=W.g*Z*M,v+=W.b*Z*M;else if(N.isLightProbe){for(let j=0;j<9;j++)r.probe[j].addScaledVector(N.sh.coefficients[j],Z);K++}else if(N.isDirectionalLight){const j=t.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity*M),N.castShadow){const Y=N.shadow,L=n.get(N);L.shadowBias=Y.bias,L.shadowNormalBias=Y.normalBias,L.shadowRadius=Y.radius,L.shadowMapSize=Y.mapSize,r.directionalShadow[g]=L,r.directionalShadowMap[g]=I,r.directionalShadowMatrix[g]=N.shadow.matrix,x++}r.directional[g]=j,g++}else if(N.isSpotLight){const j=t.get(N);j.position.setFromMatrixPosition(N.matrixWorld),j.color.copy(W).multiplyScalar(Z*M),j.distance=O,j.coneCos=Math.cos(N.angle),j.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),j.decay=N.decay,r.spot[m]=j;const Y=N.shadow;if(N.map&&(r.spotLightMap[P]=N.map,P++,Y.updateMatrices(N),N.castShadow&&F++),r.spotLightMatrix[m]=Y.matrix,N.castShadow){const L=n.get(N);L.shadowBias=Y.bias,L.shadowNormalBias=Y.normalBias,L.shadowRadius=Y.radius,L.shadowMapSize=Y.mapSize,r.spotShadow[m]=L,r.spotShadowMap[m]=I,R++}m++}else if(N.isRectAreaLight){const j=t.get(N);j.color.copy(W).multiplyScalar(Z),j.halfWidth.set(N.width*.5,0,0),j.halfHeight.set(0,N.height*.5,0),r.rectArea[_]=j,_++}else if(N.isPointLight){const j=t.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity*M),j.distance=N.distance,j.decay=N.decay,N.castShadow){const Y=N.shadow,L=n.get(N);L.shadowBias=Y.bias,L.shadowNormalBias=Y.normalBias,L.shadowRadius=Y.radius,L.shadowMapSize=Y.mapSize,L.shadowCameraNear=Y.camera.near,L.shadowCameraFar=Y.camera.far,r.pointShadow[p]=L,r.pointShadowMap[p]=I,r.pointShadowMatrix[p]=N.shadow.matrix,w++}r.point[p]=j,p++}else if(N.isHemisphereLight){const j=t.get(N);j.skyColor.copy(N.color).multiplyScalar(Z*M),j.groundColor.copy(N.groundColor).multiplyScalar(Z*M),r.hemi[y]=j,y++}}_>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=De.LTC_FLOAT_1,r.rectAreaLTC2=De.LTC_FLOAT_2):(r.rectAreaLTC1=De.LTC_HALF_1,r.rectAreaLTC2=De.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=De.LTC_FLOAT_1,r.rectAreaLTC2=De.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=De.LTC_HALF_1,r.rectAreaLTC2=De.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=f,r.ambient[2]=v;const E=r.hash;(E.directionalLength!==g||E.pointLength!==p||E.spotLength!==m||E.rectAreaLength!==_||E.hemiLength!==y||E.numDirectionalShadows!==x||E.numPointShadows!==w||E.numSpotShadows!==R||E.numSpotMaps!==P||E.numLightProbes!==K)&&(r.directional.length=g,r.spot.length=m,r.rectArea.length=_,r.point.length=p,r.hemi.length=y,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=R+P-F,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=K,E.directionalLength=g,E.pointLength=p,E.spotLength=m,E.rectAreaLength=_,E.hemiLength=y,E.numDirectionalShadows=x,E.numPointShadows=w,E.numSpotShadows=R,E.numSpotMaps=P,E.numLightProbes=K,r.version=zm++)}function h(u,c){let d=0,f=0,v=0,g=0,p=0;const m=c.matrixWorldInverse;for(let _=0,y=u.length;_<y;_++){const x=u[_];if(x.isDirectionalLight){const w=r.directional[d];w.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),d++}else if(x.isSpotLight){const w=r.spot[v];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),v++}else if(x.isRectAreaLight){const w=r.rectArea[g];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(m),o.identity(),a.copy(x.matrixWorld),a.premultiply(m),o.extractRotation(a),w.halfWidth.set(x.width*.5,0,0),w.halfHeight.set(0,x.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const w=r.point[f];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const w=r.hemi[p];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(m),p++}}}return{setup:l,setupView:h,state:r}}function ll(i,e){const t=new Hm(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function a(c){n.push(c)}function o(c){r.push(c)}function l(c){t.setup(n,c)}function h(c){t.setupView(n,c)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o}}function Gm(i,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new ll(i,e),t.set(s,[l])):a>=o.length?(l=new ll(i,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class km extends Sn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wm extends Sn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Xm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ym(i,e,t){let n=new Ta;const r=new ht,s=new ht,a=new Mt,o=new km({depthPacking:bh}),l=new Wm,h={},u=t.maxTextureSize,c={[Un]:Kt,[Kt]:Un,[xn]:xn},d=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:Xm,fragmentShader:qm}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const v=new vn;v.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Vt(v,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ol;let m=this.type;this.render=function(R,P,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const K=i.getRenderTarget(),M=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Kn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const k=m!==In&&this.type===In,N=m===In&&this.type!==In;for(let W=0,Z=R.length;W<Z;W++){const O=R[W],I=O.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const j=I.getFrameExtents();if(r.multiply(j),s.copy(I.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/j.x),r.x=s.x*j.x,I.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/j.y),r.y=s.y*j.y,I.mapSize.y=s.y)),I.map===null||k===!0||N===!0){const L=this.type!==In?{minFilter:zt,magFilter:zt}:{};I.map!==null&&I.map.dispose(),I.map=new gi(r.x,r.y,L),I.map.texture.name=O.name+".shadowMap",I.camera.updateProjectionMatrix()}i.setRenderTarget(I.map),i.clear();const Y=I.getViewportCount();for(let L=0;L<Y;L++){const q=I.getViewport(L);a.set(s.x*q.x,s.y*q.y,s.x*q.z,s.y*q.w),z.viewport(a),I.updateMatrices(O,L),n=I.getFrustum(),x(P,F,I.camera,O,this.type)}I.isPointLightShadow!==!0&&this.type===In&&_(I,F),I.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(K,M,E)};function _(R,P){const F=e.update(g);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new gi(r.x,r.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(P,null,F,d,g,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(P,null,F,f,g,null)}function y(R,P,F,K){let M=null;const E=F.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(E!==void 0)M=E;else if(M=F.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const z=M.uuid,k=P.uuid;let N=h[z];N===void 0&&(N={},h[z]=N);let W=N[k];W===void 0&&(W=M.clone(),N[k]=W,P.addEventListener("dispose",w)),M=W}if(M.visible=P.visible,M.wireframe=P.wireframe,K===In?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:c[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,F.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=i.properties.get(M);z.light=F}return M}function x(R,P,F,K,M){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===In)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,R.matrixWorld);const k=e.update(R),N=R.material;if(Array.isArray(N)){const W=k.groups;for(let Z=0,O=W.length;Z<O;Z++){const I=W[Z],j=N[I.materialIndex];if(j&&j.visible){const Y=y(R,j,K,M);R.onBeforeShadow(i,R,P,F,k,Y,I),i.renderBufferDirect(F,null,k,Y,R,I),R.onAfterShadow(i,R,P,F,k,Y,I)}}}else if(N.visible){const W=y(R,N,K,M);R.onBeforeShadow(i,R,P,F,k,W,null),i.renderBufferDirect(F,null,k,W,R,null),R.onAfterShadow(i,R,P,F,k,W,null)}}const z=R.children;for(let k=0,N=z.length;k<N;k++)x(z[k],P,F,K,M)}function w(R){R.target.removeEventListener("dispose",w);for(const F in h){const K=h[F],M=R.target.uuid;M in K&&(K[M].dispose(),delete K[M])}}}function jm(i,e,t){const n=t.isWebGL2;function r(){let D=!1;const _e=new Mt;let Se=null;const Ve=new Mt(0,0,0,0);return{setMask:function(Xe){Se!==Xe&&!D&&(i.colorMask(Xe,Xe,Xe,Xe),Se=Xe)},setLocked:function(Xe){D=Xe},setClear:function(Xe,ut,mt,dt,le){le===!0&&(Xe*=dt,ut*=dt,mt*=dt),_e.set(Xe,ut,mt,dt),Ve.equals(_e)===!1&&(i.clearColor(Xe,ut,mt,dt),Ve.copy(_e))},reset:function(){D=!1,Se=null,Ve.set(-1,0,0,0)}}}function s(){let D=!1,_e=null,Se=null,Ve=null;return{setTest:function(Xe){Xe?X(i.DEPTH_TEST):se(i.DEPTH_TEST)},setMask:function(Xe){_e!==Xe&&!D&&(i.depthMask(Xe),_e=Xe)},setFunc:function(Xe){if(Se!==Xe){switch(Xe){case Qc:i.depthFunc(i.NEVER);break;case eh:i.depthFunc(i.ALWAYS);break;case th:i.depthFunc(i.LESS);break;case ns:i.depthFunc(i.LEQUAL);break;case nh:i.depthFunc(i.EQUAL);break;case ih:i.depthFunc(i.GEQUAL);break;case rh:i.depthFunc(i.GREATER);break;case sh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Se=Xe}},setLocked:function(Xe){D=Xe},setClear:function(Xe){Ve!==Xe&&(i.clearDepth(Xe),Ve=Xe)},reset:function(){D=!1,_e=null,Se=null,Ve=null}}}function a(){let D=!1,_e=null,Se=null,Ve=null,Xe=null,ut=null,mt=null,dt=null,le=null;return{setTest:function(oe){D||(oe?X(i.STENCIL_TEST):se(i.STENCIL_TEST))},setMask:function(oe){_e!==oe&&!D&&(i.stencilMask(oe),_e=oe)},setFunc:function(oe,fe,me){(Se!==oe||Ve!==fe||Xe!==me)&&(i.stencilFunc(oe,fe,me),Se=oe,Ve=fe,Xe=me)},setOp:function(oe,fe,me){(ut!==oe||mt!==fe||dt!==me)&&(i.stencilOp(oe,fe,me),ut=oe,mt=fe,dt=me)},setLocked:function(oe){D=oe},setClear:function(oe){le!==oe&&(i.clearStencil(oe),le=oe)},reset:function(){D=!1,_e=null,Se=null,Ve=null,Xe=null,ut=null,mt=null,dt=null,le=null}}}const o=new r,l=new s,h=new a,u=new WeakMap,c=new WeakMap;let d={},f={},v=new WeakMap,g=[],p=null,m=!1,_=null,y=null,x=null,w=null,R=null,P=null,F=null,K=new et(0,0,0),M=0,E=!1,z=null,k=null,N=null,W=null,Z=null;const O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,j=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Y)[1]),I=j>=1):Y.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),I=j>=2);let L=null,q={};const U=i.getParameter(i.SCISSOR_BOX),b=i.getParameter(i.VIEWPORT),A=new Mt().fromArray(U),G=new Mt().fromArray(b);function ie(D,_e,Se,Ve){const Xe=new Uint8Array(4),ut=i.createTexture();i.bindTexture(D,ut),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let mt=0;mt<Se;mt++)n&&(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)?i.texImage3D(_e,0,i.RGBA,1,1,Ve,0,i.RGBA,i.UNSIGNED_BYTE,Xe):i.texImage2D(_e+mt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Xe);return ut}const te={};te[i.TEXTURE_2D]=ie(i.TEXTURE_2D,i.TEXTURE_2D,1),te[i.TEXTURE_CUBE_MAP]=ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(te[i.TEXTURE_2D_ARRAY]=ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),te[i.TEXTURE_3D]=ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),h.setClear(0),X(i.DEPTH_TEST),l.setFunc(ns),be(!1),C(Oa),X(i.CULL_FACE),ae(Kn);function X(D){d[D]!==!0&&(i.enable(D),d[D]=!0)}function se(D){d[D]!==!1&&(i.disable(D),d[D]=!1)}function ce(D,_e){return f[D]!==_e?(i.bindFramebuffer(D,_e),f[D]=_e,n&&(D===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=_e),D===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=_e)),!0):!1}function H(D,_e){let Se=g,Ve=!1;if(D)if(Se=v.get(_e),Se===void 0&&(Se=[],v.set(_e,Se)),D.isWebGLMultipleRenderTargets){const Xe=D.texture;if(Se.length!==Xe.length||Se[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,mt=Xe.length;ut<mt;ut++)Se[ut]=i.COLOR_ATTACHMENT0+ut;Se.length=Xe.length,Ve=!0}}else Se[0]!==i.COLOR_ATTACHMENT0&&(Se[0]=i.COLOR_ATTACHMENT0,Ve=!0);else Se[0]!==i.BACK&&(Se[0]=i.BACK,Ve=!0);Ve&&(t.isWebGL2?i.drawBuffers(Se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Se))}function Ae(D){return p!==D?(i.useProgram(D),p=D,!0):!1}const ue={[li]:i.FUNC_ADD,[Oc]:i.FUNC_SUBTRACT,[zc]:i.FUNC_REVERSE_SUBTRACT};if(n)ue[Ga]=i.MIN,ue[ka]=i.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(ue[Ga]=D.MIN_EXT,ue[ka]=D.MAX_EXT)}const re={[Vc]:i.ZERO,[Hc]:i.ONE,[Gc]:i.SRC_COLOR,[ia]:i.SRC_ALPHA,[jc]:i.SRC_ALPHA_SATURATE,[qc]:i.DST_COLOR,[Wc]:i.DST_ALPHA,[kc]:i.ONE_MINUS_SRC_COLOR,[ra]:i.ONE_MINUS_SRC_ALPHA,[Yc]:i.ONE_MINUS_DST_COLOR,[Xc]:i.ONE_MINUS_DST_ALPHA,[Kc]:i.CONSTANT_COLOR,[Zc]:i.ONE_MINUS_CONSTANT_COLOR,[$c]:i.CONSTANT_ALPHA,[Jc]:i.ONE_MINUS_CONSTANT_ALPHA};function ae(D,_e,Se,Ve,Xe,ut,mt,dt,le,oe){if(D===Kn){m===!0&&(se(i.BLEND),m=!1);return}if(m===!1&&(X(i.BLEND),m=!0),D!==Bc){if(D!==_||oe!==E){if((y!==li||R!==li)&&(i.blendEquation(i.FUNC_ADD),y=li,R=li),oe)switch(D){case Gi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case za:i.blendFunc(i.ONE,i.ONE);break;case Va:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ha:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Gi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case za:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Va:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ha:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}x=null,w=null,P=null,F=null,K.set(0,0,0),M=0,_=D,E=oe}return}Xe=Xe||_e,ut=ut||Se,mt=mt||Ve,(_e!==y||Xe!==R)&&(i.blendEquationSeparate(ue[_e],ue[Xe]),y=_e,R=Xe),(Se!==x||Ve!==w||ut!==P||mt!==F)&&(i.blendFuncSeparate(re[Se],re[Ve],re[ut],re[mt]),x=Se,w=Ve,P=ut,F=mt),(dt.equals(K)===!1||le!==M)&&(i.blendColor(dt.r,dt.g,dt.b,le),K.copy(dt),M=le),_=D,E=!1}function We(D,_e){D.side===xn?se(i.CULL_FACE):X(i.CULL_FACE);let Se=D.side===Kt;_e&&(Se=!Se),be(Se),D.blending===Gi&&D.transparent===!1?ae(Kn):ae(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);const Ve=D.stencilWrite;h.setTest(Ve),Ve&&(h.setMask(D.stencilWriteMask),h.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),h.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ee(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?X(i.SAMPLE_ALPHA_TO_COVERAGE):se(i.SAMPLE_ALPHA_TO_COVERAGE)}function be(D){z!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),z=D)}function C(D){D!==Dc?(X(i.CULL_FACE),D!==k&&(D===Oa?i.cullFace(i.BACK):D===Uc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):se(i.CULL_FACE),k=D}function S(D){D!==N&&(I&&i.lineWidth(D),N=D)}function ee(D,_e,Se){D?(X(i.POLYGON_OFFSET_FILL),(W!==_e||Z!==Se)&&(i.polygonOffset(_e,Se),W=_e,Z=Se)):se(i.POLYGON_OFFSET_FILL)}function de(D){D?X(i.SCISSOR_TEST):se(i.SCISSOR_TEST)}function he(D){D===void 0&&(D=i.TEXTURE0+O-1),L!==D&&(i.activeTexture(D),L=D)}function pe(D,_e,Se){Se===void 0&&(L===null?Se=i.TEXTURE0+O-1:Se=L);let Ve=q[Se];Ve===void 0&&(Ve={type:void 0,texture:void 0},q[Se]=Ve),(Ve.type!==D||Ve.texture!==_e)&&(L!==Se&&(i.activeTexture(Se),L=Se),i.bindTexture(D,_e||te[D]),Ve.type=D,Ve.texture=_e)}function Me(){const D=q[L];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function xe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ze(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function je(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function at(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Qe(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function qe(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function He(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Be(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Je(D){A.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),A.copy(D))}function tt(D){G.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),G.copy(D))}function ot(D,_e){let Se=c.get(_e);Se===void 0&&(Se=new WeakMap,c.set(_e,Se));let Ve=Se.get(D);Ve===void 0&&(Ve=i.getUniformBlockIndex(_e,D.name),Se.set(D,Ve))}function $e(D,_e){const Ve=c.get(_e).get(D);u.get(_e)!==Ve&&(i.uniformBlockBinding(_e,Ve,D.__bindingPointIndex),u.set(_e,Ve))}function it(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},L=null,q={},f={},v=new WeakMap,g=[],p=null,m=!1,_=null,y=null,x=null,w=null,R=null,P=null,F=null,K=new et(0,0,0),M=0,E=!1,z=null,k=null,N=null,W=null,Z=null,A.set(0,0,i.canvas.width,i.canvas.height),G.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),h.reset()}return{buffers:{color:o,depth:l,stencil:h},enable:X,disable:se,bindFramebuffer:ce,drawBuffers:H,useProgram:Ae,setBlending:ae,setMaterial:We,setFlipSided:be,setCullFace:C,setLineWidth:S,setPolygonOffset:ee,setScissorTest:de,activeTexture:he,bindTexture:pe,unbindTexture:Me,compressedTexImage2D:xe,compressedTexImage3D:ye,texImage2D:He,texImage3D:Be,updateUBOMapping:ot,uniformBlockBinding:$e,texStorage2D:Qe,texStorage3D:qe,texSubImage2D:ze,texSubImage3D:je,compressedTexSubImage2D:ge,compressedTexSubImage3D:at,scissor:Je,viewport:tt,reset:it}}function Km(i,e,t,n,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let c;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,S){return f?new OffscreenCanvas(C,S):Mr("canvas")}function g(C,S,ee,de){let he=1;if((C.width>de||C.height>de)&&(he=de/Math.max(C.width,C.height)),he<1||S===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const pe=S?ls:Math.floor,Me=pe(he*C.width),xe=pe(he*C.height);c===void 0&&(c=v(Me,xe));const ye=ee?v(Me,xe):c;return ye.width=Me,ye.height=xe,ye.getContext("2d").drawImage(C,0,0,Me,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Me+"x"+xe+")."),ye}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function p(C){return ua(C.width)&&ua(C.height)}function m(C){return o?!1:C.wrapS!==rn||C.wrapT!==rn||C.minFilter!==zt&&C.minFilter!==Wt}function _(C,S){return C.generateMipmaps&&S&&C.minFilter!==zt&&C.minFilter!==Wt}function y(C){i.generateMipmap(C)}function x(C,S,ee,de,he=!1){if(o===!1)return S;if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let pe=S;if(S===i.RED&&(ee===i.FLOAT&&(pe=i.R32F),ee===i.HALF_FLOAT&&(pe=i.R16F),ee===i.UNSIGNED_BYTE&&(pe=i.R8)),S===i.RED_INTEGER&&(ee===i.UNSIGNED_BYTE&&(pe=i.R8UI),ee===i.UNSIGNED_SHORT&&(pe=i.R16UI),ee===i.UNSIGNED_INT&&(pe=i.R32UI),ee===i.BYTE&&(pe=i.R8I),ee===i.SHORT&&(pe=i.R16I),ee===i.INT&&(pe=i.R32I)),S===i.RG&&(ee===i.FLOAT&&(pe=i.RG32F),ee===i.HALF_FLOAT&&(pe=i.RG16F),ee===i.UNSIGNED_BYTE&&(pe=i.RG8)),S===i.RGBA){const Me=he?rs:_t.getTransfer(de);ee===i.FLOAT&&(pe=i.RGBA32F),ee===i.HALF_FLOAT&&(pe=i.RGBA16F),ee===i.UNSIGNED_BYTE&&(pe=Me===St?i.SRGB8_ALPHA8:i.RGBA8),ee===i.UNSIGNED_SHORT_4_4_4_4&&(pe=i.RGBA4),ee===i.UNSIGNED_SHORT_5_5_5_1&&(pe=i.RGB5_A1)}return(pe===i.R16F||pe===i.R32F||pe===i.RG16F||pe===i.RG32F||pe===i.RGBA16F||pe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function w(C,S,ee){return _(C,ee)===!0||C.isFramebufferTexture&&C.minFilter!==zt&&C.minFilter!==Wt?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function R(C){return C===zt||C===oa||C===Oi?i.NEAREST:i.LINEAR}function P(C){const S=C.target;S.removeEventListener("dispose",P),K(S),S.isVideoTexture&&u.delete(S)}function F(C){const S=C.target;S.removeEventListener("dispose",F),E(S)}function K(C){const S=n.get(C);if(S.__webglInit===void 0)return;const ee=C.source,de=d.get(ee);if(de){const he=de[S.__cacheKey];he.usedTimes--,he.usedTimes===0&&M(C),Object.keys(de).length===0&&d.delete(ee)}n.remove(C)}function M(C){const S=n.get(C);i.deleteTexture(S.__webglTexture);const ee=C.source,de=d.get(ee);delete de[S.__cacheKey],a.memory.textures--}function E(C){const S=C.texture,ee=n.get(C),de=n.get(S);if(de.__webglTexture!==void 0&&(i.deleteTexture(de.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(ee.__webglFramebuffer[he]))for(let pe=0;pe<ee.__webglFramebuffer[he].length;pe++)i.deleteFramebuffer(ee.__webglFramebuffer[he][pe]);else i.deleteFramebuffer(ee.__webglFramebuffer[he]);ee.__webglDepthbuffer&&i.deleteRenderbuffer(ee.__webglDepthbuffer[he])}else{if(Array.isArray(ee.__webglFramebuffer))for(let he=0;he<ee.__webglFramebuffer.length;he++)i.deleteFramebuffer(ee.__webglFramebuffer[he]);else i.deleteFramebuffer(ee.__webglFramebuffer);if(ee.__webglDepthbuffer&&i.deleteRenderbuffer(ee.__webglDepthbuffer),ee.__webglMultisampledFramebuffer&&i.deleteFramebuffer(ee.__webglMultisampledFramebuffer),ee.__webglColorRenderbuffer)for(let he=0;he<ee.__webglColorRenderbuffer.length;he++)ee.__webglColorRenderbuffer[he]&&i.deleteRenderbuffer(ee.__webglColorRenderbuffer[he]);ee.__webglDepthRenderbuffer&&i.deleteRenderbuffer(ee.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let he=0,pe=S.length;he<pe;he++){const Me=n.get(S[he]);Me.__webglTexture&&(i.deleteTexture(Me.__webglTexture),a.memory.textures--),n.remove(S[he])}n.remove(S),n.remove(C)}let z=0;function k(){z=0}function N(){const C=z;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),z+=1,C}function W(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function Z(C,S){const ee=n.get(C);if(C.isVideoTexture&&We(C),C.isRenderTargetTexture===!1&&C.version>0&&ee.__version!==C.version){const de=C.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{A(ee,C,S);return}}t.bindTexture(i.TEXTURE_2D,ee.__webglTexture,i.TEXTURE0+S)}function O(C,S){const ee=n.get(C);if(C.version>0&&ee.__version!==C.version){A(ee,C,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,ee.__webglTexture,i.TEXTURE0+S)}function I(C,S){const ee=n.get(C);if(C.version>0&&ee.__version!==C.version){A(ee,C,S);return}t.bindTexture(i.TEXTURE_3D,ee.__webglTexture,i.TEXTURE0+S)}function j(C,S){const ee=n.get(C);if(C.version>0&&ee.__version!==C.version){G(ee,C,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture,i.TEXTURE0+S)}const Y={[Yi]:i.REPEAT,[rn]:i.CLAMP_TO_EDGE,[is]:i.MIRRORED_REPEAT},L={[zt]:i.NEAREST,[oa]:i.NEAREST_MIPMAP_NEAREST,[Oi]:i.NEAREST_MIPMAP_LINEAR,[Wt]:i.LINEAR,[es]:i.LINEAR_MIPMAP_NEAREST,[Nn]:i.LINEAR_MIPMAP_LINEAR},q={[Rh]:i.NEVER,[Dh]:i.ALWAYS,[Ch]:i.LESS,[$l]:i.LEQUAL,[Ph]:i.EQUAL,[Nh]:i.GEQUAL,[Lh]:i.GREATER,[Ih]:i.NOTEQUAL};function U(C,S,ee){if(S.type===yn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Wt||S.magFilter===es||S.magFilter===Oi||S.magFilter===Nn||S.minFilter===Wt||S.minFilter===es||S.minFilter===Oi||S.minFilter===Nn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),ee?(i.texParameteri(C,i.TEXTURE_WRAP_S,Y[S.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Y[S.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Y[S.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,L[S.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,L[S.minFilter])):(i.texParameteri(C,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(C,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(S.wrapS!==rn||S.wrapT!==rn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(C,i.TEXTURE_MAG_FILTER,R(S.magFilter)),i.texParameteri(C,i.TEXTURE_MIN_FILTER,R(S.minFilter)),S.minFilter!==zt&&S.minFilter!==Wt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,q[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const de=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===zt||S.minFilter!==Oi&&S.minFilter!==Nn||S.type===yn&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===xr&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(i.texParameterf(C,de.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function b(C,S){let ee=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",P));const de=S.source;let he=d.get(de);he===void 0&&(he={},d.set(de,he));const pe=W(S);if(pe!==C.__cacheKey){he[pe]===void 0&&(he[pe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,ee=!0),he[pe].usedTimes++;const Me=he[C.__cacheKey];Me!==void 0&&(he[C.__cacheKey].usedTimes--,Me.usedTimes===0&&M(S)),C.__cacheKey=pe,C.__webglTexture=he[pe].texture}return ee}function A(C,S,ee){let de=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(de=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(de=i.TEXTURE_3D);const he=b(C,S),pe=S.source;t.bindTexture(de,C.__webglTexture,i.TEXTURE0+ee);const Me=n.get(pe);if(pe.version!==Me.__version||he===!0){t.activeTexture(i.TEXTURE0+ee);const xe=_t.getPrimaries(_t.workingColorSpace),ye=S.colorSpace===an?null:_t.getPrimaries(S.colorSpace),ze=S.colorSpace===an||xe===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const je=m(S)&&p(S.image)===!1;let ge=g(S.image,je,!1,r.maxTextureSize);ge=be(S,ge);const at=p(ge)||o,Qe=s.convert(S.format,S.colorSpace);let qe=s.convert(S.type),He=x(S.internalFormat,Qe,qe,S.colorSpace,S.isVideoTexture);U(de,S,at);let Be;const Je=S.mipmaps,tt=o&&S.isVideoTexture!==!0&&He!==Yl,ot=Me.__version===void 0||he===!0,$e=pe.dataReady,it=w(S,ge,at);if(S.isDepthTexture)He=i.DEPTH_COMPONENT,o?S.type===yn?He=i.DEPTH_COMPONENT32F:S.type===qn?He=i.DEPTH_COMPONENT24:S.type===di?He=i.DEPTH24_STENCIL8:He=i.DEPTH_COMPONENT16:S.type===yn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===fi&&He===i.DEPTH_COMPONENT&&S.type!==Ma&&S.type!==qn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=qn,qe=s.convert(S.type)),S.format===ji&&He===i.DEPTH_COMPONENT&&(He=i.DEPTH_STENCIL,S.type!==di&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=di,qe=s.convert(S.type))),ot&&(tt?t.texStorage2D(i.TEXTURE_2D,1,He,ge.width,ge.height):t.texImage2D(i.TEXTURE_2D,0,He,ge.width,ge.height,0,Qe,qe,null));else if(S.isDataTexture)if(Je.length>0&&at){tt&&ot&&t.texStorage2D(i.TEXTURE_2D,it,He,Je[0].width,Je[0].height);for(let D=0,_e=Je.length;D<_e;D++)Be=Je[D],tt?$e&&t.texSubImage2D(i.TEXTURE_2D,D,0,0,Be.width,Be.height,Qe,qe,Be.data):t.texImage2D(i.TEXTURE_2D,D,He,Be.width,Be.height,0,Qe,qe,Be.data);S.generateMipmaps=!1}else tt?(ot&&t.texStorage2D(i.TEXTURE_2D,it,He,ge.width,ge.height),$e&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge.width,ge.height,Qe,qe,ge.data)):t.texImage2D(i.TEXTURE_2D,0,He,ge.width,ge.height,0,Qe,qe,ge.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){tt&&ot&&t.texStorage3D(i.TEXTURE_2D_ARRAY,it,He,Je[0].width,Je[0].height,ge.depth);for(let D=0,_e=Je.length;D<_e;D++)Be=Je[D],S.format!==sn?Qe!==null?tt?$e&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,D,0,0,0,Be.width,Be.height,ge.depth,Qe,Be.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,D,He,Be.width,Be.height,ge.depth,0,Be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?$e&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,D,0,0,0,Be.width,Be.height,ge.depth,Qe,qe,Be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,D,He,Be.width,Be.height,ge.depth,0,Qe,qe,Be.data)}else{tt&&ot&&t.texStorage2D(i.TEXTURE_2D,it,He,Je[0].width,Je[0].height);for(let D=0,_e=Je.length;D<_e;D++)Be=Je[D],S.format!==sn?Qe!==null?tt?$e&&t.compressedTexSubImage2D(i.TEXTURE_2D,D,0,0,Be.width,Be.height,Qe,Be.data):t.compressedTexImage2D(i.TEXTURE_2D,D,He,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?$e&&t.texSubImage2D(i.TEXTURE_2D,D,0,0,Be.width,Be.height,Qe,qe,Be.data):t.texImage2D(i.TEXTURE_2D,D,He,Be.width,Be.height,0,Qe,qe,Be.data)}else if(S.isDataArrayTexture)tt?(ot&&t.texStorage3D(i.TEXTURE_2D_ARRAY,it,He,ge.width,ge.height,ge.depth),$e&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Qe,qe,ge.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,He,ge.width,ge.height,ge.depth,0,Qe,qe,ge.data);else if(S.isData3DTexture)tt?(ot&&t.texStorage3D(i.TEXTURE_3D,it,He,ge.width,ge.height,ge.depth),$e&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Qe,qe,ge.data)):t.texImage3D(i.TEXTURE_3D,0,He,ge.width,ge.height,ge.depth,0,Qe,qe,ge.data);else if(S.isFramebufferTexture){if(ot)if(tt)t.texStorage2D(i.TEXTURE_2D,it,He,ge.width,ge.height);else{let D=ge.width,_e=ge.height;for(let Se=0;Se<it;Se++)t.texImage2D(i.TEXTURE_2D,Se,He,D,_e,0,Qe,qe,null),D>>=1,_e>>=1}}else if(Je.length>0&&at){tt&&ot&&t.texStorage2D(i.TEXTURE_2D,it,He,Je[0].width,Je[0].height);for(let D=0,_e=Je.length;D<_e;D++)Be=Je[D],tt?$e&&t.texSubImage2D(i.TEXTURE_2D,D,0,0,Qe,qe,Be):t.texImage2D(i.TEXTURE_2D,D,He,Qe,qe,Be);S.generateMipmaps=!1}else tt?(ot&&t.texStorage2D(i.TEXTURE_2D,it,He,ge.width,ge.height),$e&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Qe,qe,ge)):t.texImage2D(i.TEXTURE_2D,0,He,Qe,qe,ge);_(S,at)&&y(de),Me.__version=pe.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function G(C,S,ee){if(S.image.length!==6)return;const de=b(C,S),he=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+ee);const pe=n.get(he);if(he.version!==pe.__version||de===!0){t.activeTexture(i.TEXTURE0+ee);const Me=_t.getPrimaries(_t.workingColorSpace),xe=S.colorSpace===an?null:_t.getPrimaries(S.colorSpace),ye=S.colorSpace===an||Me===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const ze=S.isCompressedTexture||S.image[0].isCompressedTexture,je=S.image[0]&&S.image[0].isDataTexture,ge=[];for(let D=0;D<6;D++)!ze&&!je?ge[D]=g(S.image[D],!1,!0,r.maxCubemapSize):ge[D]=je?S.image[D].image:S.image[D],ge[D]=be(S,ge[D]);const at=ge[0],Qe=p(at)||o,qe=s.convert(S.format,S.colorSpace),He=s.convert(S.type),Be=x(S.internalFormat,qe,He,S.colorSpace),Je=o&&S.isVideoTexture!==!0,tt=pe.__version===void 0||de===!0,ot=he.dataReady;let $e=w(S,at,Qe);U(i.TEXTURE_CUBE_MAP,S,Qe);let it;if(ze){Je&&tt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,$e,Be,at.width,at.height);for(let D=0;D<6;D++){it=ge[D].mipmaps;for(let _e=0;_e<it.length;_e++){const Se=it[_e];S.format!==sn?qe!==null?Je?ot&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,_e,0,0,Se.width,Se.height,qe,Se.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,_e,Be,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Je?ot&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,_e,0,0,Se.width,Se.height,qe,He,Se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,_e,Be,Se.width,Se.height,0,qe,He,Se.data)}}}else{it=S.mipmaps,Je&&tt&&(it.length>0&&$e++,t.texStorage2D(i.TEXTURE_CUBE_MAP,$e,Be,ge[0].width,ge[0].height));for(let D=0;D<6;D++)if(je){Je?ot&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,ge[D].width,ge[D].height,qe,He,ge[D].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,Be,ge[D].width,ge[D].height,0,qe,He,ge[D].data);for(let _e=0;_e<it.length;_e++){const Ve=it[_e].image[D].image;Je?ot&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,_e+1,0,0,Ve.width,Ve.height,qe,He,Ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,_e+1,Be,Ve.width,Ve.height,0,qe,He,Ve.data)}}else{Je?ot&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,qe,He,ge[D]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,Be,qe,He,ge[D]);for(let _e=0;_e<it.length;_e++){const Se=it[_e];Je?ot&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,_e+1,0,0,qe,He,Se.image[D]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,_e+1,Be,qe,He,Se.image[D])}}}_(S,Qe)&&y(i.TEXTURE_CUBE_MAP),pe.__version=he.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ie(C,S,ee,de,he,pe){const Me=s.convert(ee.format,ee.colorSpace),xe=s.convert(ee.type),ye=x(ee.internalFormat,Me,xe,ee.colorSpace);if(!n.get(S).__hasExternalTextures){const je=Math.max(1,S.width>>pe),ge=Math.max(1,S.height>>pe);he===i.TEXTURE_3D||he===i.TEXTURE_2D_ARRAY?t.texImage3D(he,pe,ye,je,ge,S.depth,0,Me,xe,null):t.texImage2D(he,pe,ye,je,ge,0,Me,xe,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),ae(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,he,n.get(ee).__webglTexture,0,re(S)):(he===i.TEXTURE_2D||he>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,de,he,n.get(ee).__webglTexture,pe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function te(C,S,ee){if(i.bindRenderbuffer(i.RENDERBUFFER,C),S.depthBuffer&&!S.stencilBuffer){let de=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(ee||ae(S)){const he=S.depthTexture;he&&he.isDepthTexture&&(he.type===yn?de=i.DEPTH_COMPONENT32F:he.type===qn&&(de=i.DEPTH_COMPONENT24));const pe=re(S);ae(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe,de,S.width,S.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,de,S.width,S.height)}else i.renderbufferStorage(i.RENDERBUFFER,de,S.width,S.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,C)}else if(S.depthBuffer&&S.stencilBuffer){const de=re(S);ee&&ae(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,i.DEPTH24_STENCIL8,S.width,S.height):ae(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,i.DEPTH24_STENCIL8,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,C)}else{const de=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let he=0;he<de.length;he++){const pe=de[he],Me=s.convert(pe.format,pe.colorSpace),xe=s.convert(pe.type),ye=x(pe.internalFormat,Me,xe,pe.colorSpace),ze=re(S);ee&&ae(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,ye,S.width,S.height):ae(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ze,ye,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ye,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function X(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Z(S.depthTexture,0);const de=n.get(S.depthTexture).__webglTexture,he=re(S);if(S.depthTexture.format===fi)ae(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,de,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,de,0);else if(S.depthTexture.format===ji)ae(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,de,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function se(C){const S=n.get(C),ee=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");X(S.__webglFramebuffer,C)}else if(ee){S.__webglDepthbuffer=[];for(let de=0;de<6;de++)t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[de]),S.__webglDepthbuffer[de]=i.createRenderbuffer(),te(S.__webglDepthbuffer[de],C,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),te(S.__webglDepthbuffer,C,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(C,S,ee){const de=n.get(C);S!==void 0&&ie(de.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ee!==void 0&&se(C)}function H(C){const S=C.texture,ee=n.get(C),de=n.get(S);C.addEventListener("dispose",F),C.isWebGLMultipleRenderTargets!==!0&&(de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture()),de.__version=S.version,a.memory.textures++);const he=C.isWebGLCubeRenderTarget===!0,pe=C.isWebGLMultipleRenderTargets===!0,Me=p(C)||o;if(he){ee.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(o&&S.mipmaps&&S.mipmaps.length>0){ee.__webglFramebuffer[xe]=[];for(let ye=0;ye<S.mipmaps.length;ye++)ee.__webglFramebuffer[xe][ye]=i.createFramebuffer()}else ee.__webglFramebuffer[xe]=i.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){ee.__webglFramebuffer=[];for(let xe=0;xe<S.mipmaps.length;xe++)ee.__webglFramebuffer[xe]=i.createFramebuffer()}else ee.__webglFramebuffer=i.createFramebuffer();if(pe)if(r.drawBuffers){const xe=C.texture;for(let ye=0,ze=xe.length;ye<ze;ye++){const je=n.get(xe[ye]);je.__webglTexture===void 0&&(je.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&ae(C)===!1){const xe=pe?S:[S];ee.__webglMultisampledFramebuffer=i.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let ye=0;ye<xe.length;ye++){const ze=xe[ye];ee.__webglColorRenderbuffer[ye]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ee.__webglColorRenderbuffer[ye]);const je=s.convert(ze.format,ze.colorSpace),ge=s.convert(ze.type),at=x(ze.internalFormat,je,ge,ze.colorSpace,C.isXRRenderTarget===!0),Qe=re(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Qe,at,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,ee.__webglColorRenderbuffer[ye])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(ee.__webglDepthRenderbuffer=i.createRenderbuffer(),te(ee.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(he){t.bindTexture(i.TEXTURE_CUBE_MAP,de.__webglTexture),U(i.TEXTURE_CUBE_MAP,S,Me);for(let xe=0;xe<6;xe++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let ye=0;ye<S.mipmaps.length;ye++)ie(ee.__webglFramebuffer[xe][ye],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ye);else ie(ee.__webglFramebuffer[xe],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);_(S,Me)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){const xe=C.texture;for(let ye=0,ze=xe.length;ye<ze;ye++){const je=xe[ye],ge=n.get(je);t.bindTexture(i.TEXTURE_2D,ge.__webglTexture),U(i.TEXTURE_2D,je,Me),ie(ee.__webglFramebuffer,C,je,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,0),_(je,Me)&&y(i.TEXTURE_2D)}t.unbindTexture()}else{let xe=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?xe=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(xe,de.__webglTexture),U(xe,S,Me),o&&S.mipmaps&&S.mipmaps.length>0)for(let ye=0;ye<S.mipmaps.length;ye++)ie(ee.__webglFramebuffer[ye],C,S,i.COLOR_ATTACHMENT0,xe,ye);else ie(ee.__webglFramebuffer,C,S,i.COLOR_ATTACHMENT0,xe,0);_(S,Me)&&y(xe),t.unbindTexture()}C.depthBuffer&&se(C)}function Ae(C){const S=p(C)||o,ee=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let de=0,he=ee.length;de<he;de++){const pe=ee[de];if(_(pe,S)){const Me=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,xe=n.get(pe).__webglTexture;t.bindTexture(Me,xe),y(Me),t.unbindTexture()}}}function ue(C){if(o&&C.samples>0&&ae(C)===!1){const S=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],ee=C.width,de=C.height;let he=i.COLOR_BUFFER_BIT;const pe=[],Me=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=n.get(C),ye=C.isWebGLMultipleRenderTargets===!0;if(ye)for(let ze=0;ze<S.length;ze++)t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ze,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ze,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let ze=0;ze<S.length;ze++){pe.push(i.COLOR_ATTACHMENT0+ze),C.depthBuffer&&pe.push(Me);const je=xe.__ignoreDepthValues!==void 0?xe.__ignoreDepthValues:!1;if(je===!1&&(C.depthBuffer&&(he|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&(he|=i.STENCIL_BUFFER_BIT)),ye&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xe.__webglColorRenderbuffer[ze]),je===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Me]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Me])),ye){const ge=n.get(S[ze]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ge,0)}i.blitFramebuffer(0,0,ee,de,0,0,ee,de,he,i.NEAREST),h&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pe)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ye)for(let ze=0;ze<S.length;ze++){t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ze,i.RENDERBUFFER,xe.__webglColorRenderbuffer[ze]);const je=n.get(S[ze]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ze,i.TEXTURE_2D,je,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}}function re(C){return Math.min(r.maxSamples,C.samples)}function ae(C){const S=n.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function We(C){const S=a.render.frame;u.get(C)!==S&&(u.set(C,S),C.update())}function be(C,S){const ee=C.colorSpace,de=C.format,he=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===ha||ee!==Ht&&ee!==an&&(_t.getTransfer(ee)===St?o===!1?e.has("EXT_sRGB")===!0&&de===sn?(C.format=ha,C.minFilter=Wt,C.generateMipmaps=!1):S=Ql.sRGBToLinear(S):(de!==sn||he!==$n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),S}this.allocateTextureUnit=N,this.resetTextureUnits=k,this.setTexture2D=Z,this.setTexture2DArray=O,this.setTexture3D=I,this.setTextureCube=j,this.rebindTextures=ce,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=ae}function Zm(i,e,t){const n=t.isWebGL2;function r(s,a=an){let o;const l=_t.getTransfer(a);if(s===$n)return i.UNSIGNED_BYTE;if(s===Gl)return i.UNSIGNED_SHORT_4_4_4_4;if(s===kl)return i.UNSIGNED_SHORT_5_5_5_1;if(s===mh)return i.BYTE;if(s===vh)return i.SHORT;if(s===Ma)return i.UNSIGNED_SHORT;if(s===Hl)return i.INT;if(s===qn)return i.UNSIGNED_INT;if(s===yn)return i.FLOAT;if(s===xr)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===gh)return i.ALPHA;if(s===sn)return i.RGBA;if(s===_h)return i.LUMINANCE;if(s===xh)return i.LUMINANCE_ALPHA;if(s===fi)return i.DEPTH_COMPONENT;if(s===ji)return i.DEPTH_STENCIL;if(s===ha)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===yh)return i.RED;if(s===Wl)return i.RED_INTEGER;if(s===Mh)return i.RG;if(s===Xl)return i.RG_INTEGER;if(s===ql)return i.RGBA_INTEGER;if(s===gs||s===_s||s===xs||s===ys)if(l===St)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===gs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===_s)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===xs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ys)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===gs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===_s)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===xs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ys)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Xa||s===qa||s===Ya||s===ja)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Xa)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===qa)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ya)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ja)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Yl)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ka||s===Za)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Ka)return l===St?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Za)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===$a||s===Ja||s===Qa||s===eo||s===to||s===no||s===io||s===ro||s===so||s===ao||s===oo||s===lo||s===co||s===ho)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===$a)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ja)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Qa)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===eo)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===to)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===no)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===io)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ro)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===so)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ao)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===oo)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===lo)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===co)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ho)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ms||s===uo||s===fo)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Ms)return l===St?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===uo)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===fo)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Sh||s===po||s===mo||s===vo)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Ms)return o.COMPRESSED_RED_RGTC1_EXT;if(s===po)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===mo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===vo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===di?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class $m extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let ui=class extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}};const Jm={type:"move"};class Xs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),m=this._getHandJoint(h,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=h.joints["index-finger-tip"],c=h.joints["thumb-tip"],d=u.position.distanceTo(c.position),f=.02,v=.005;h.inputState.pinching&&d>f+v?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&d<=f-v&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Jm)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ui;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Qm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ev=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class tv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Dt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,r=new Jn({extensions:{fragDepth:!0},vertexShader:Qm,fragmentShader:ev,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Vt(new fs(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class nv extends er{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,h=null,u=null,c=null,d=null,f=null,v=null;const g=new tv,p=t.getContextAttributes();let m=null,_=null;const y=[],x=[],w=new ht;let R=null;const P=new jt;P.layers.enable(1),P.viewport=new Mt;const F=new jt;F.layers.enable(2),F.viewport=new Mt;const K=[P,F],M=new $m;M.layers.enable(1),M.layers.enable(2);let E=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(b){let A=y[b];return A===void 0&&(A=new Xs,y[b]=A),A.getTargetRaySpace()},this.getControllerGrip=function(b){let A=y[b];return A===void 0&&(A=new Xs,y[b]=A),A.getGripSpace()},this.getHand=function(b){let A=y[b];return A===void 0&&(A=new Xs,y[b]=A),A.getHandSpace()};function k(b){const A=x.indexOf(b.inputSource);if(A===-1)return;const G=y[A];G!==void 0&&(G.update(b.inputSource,b.frame,h||a),G.dispatchEvent({type:b.type,data:b.inputSource}))}function N(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",W);for(let b=0;b<y.length;b++){const A=x[b];A!==null&&(x[b]=null,y[b].disconnect(A))}E=null,z=null,g.reset(),e.setRenderTarget(m),f=null,d=null,c=null,r=null,_=null,U.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(b){s=b,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(b){o=b,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(b){h=b},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return c},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(b){if(r=b,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",N),r.addEventListener("inputsourceschange",W),p.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(w),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const A={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,A),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new gi(f.framebufferWidth,f.framebufferHeight,{format:sn,type:$n,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let A=null,G=null,ie=null;p.depth&&(ie=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,A=p.stencil?ji:fi,G=p.stencil?di:qn);const te={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:s};c=new XRWebGLBinding(r,t),d=c.createProjectionLayer(te),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new gi(d.textureWidth,d.textureHeight,{format:sn,type:$n,depthTexture:new hc(d.textureWidth,d.textureHeight,G,void 0,void 0,void 0,void 0,void 0,void 0,A),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const X=e.properties.get(_);X.__ignoreDepthValues=d.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await r.requestReferenceSpace(o),U.setContext(r),U.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function W(b){for(let A=0;A<b.removed.length;A++){const G=b.removed[A],ie=x.indexOf(G);ie>=0&&(x[ie]=null,y[ie].disconnect(G))}for(let A=0;A<b.added.length;A++){const G=b.added[A];let ie=x.indexOf(G);if(ie===-1){for(let X=0;X<y.length;X++)if(X>=x.length){x.push(G),ie=X;break}else if(x[X]===null){x[X]=G,ie=X;break}if(ie===-1)break}const te=y[ie];te&&te.connect(G)}}const Z=new Q,O=new Q;function I(b,A,G){Z.setFromMatrixPosition(A.matrixWorld),O.setFromMatrixPosition(G.matrixWorld);const ie=Z.distanceTo(O),te=A.projectionMatrix.elements,X=G.projectionMatrix.elements,se=te[14]/(te[10]-1),ce=te[14]/(te[10]+1),H=(te[9]+1)/te[5],Ae=(te[9]-1)/te[5],ue=(te[8]-1)/te[0],re=(X[8]+1)/X[0],ae=se*ue,We=se*re,be=ie/(-ue+re),C=be*-ue;A.matrixWorld.decompose(b.position,b.quaternion,b.scale),b.translateX(C),b.translateZ(be),b.matrixWorld.compose(b.position,b.quaternion,b.scale),b.matrixWorldInverse.copy(b.matrixWorld).invert();const S=se+be,ee=ce+be,de=ae-C,he=We+(ie-C),pe=H*ce/ee*S,Me=Ae*ce/ee*S;b.projectionMatrix.makePerspective(de,he,pe,Me,S,ee),b.projectionMatrixInverse.copy(b.projectionMatrix).invert()}function j(b,A){A===null?b.matrixWorld.copy(b.matrix):b.matrixWorld.multiplyMatrices(A.matrixWorld,b.matrix),b.matrixWorldInverse.copy(b.matrixWorld).invert()}this.updateCamera=function(b){if(r===null)return;g.texture!==null&&(b.near=g.depthNear,b.far=g.depthFar),M.near=F.near=P.near=b.near,M.far=F.far=P.far=b.far,(E!==M.near||z!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),E=M.near,z=M.far,P.near=E,P.far=z,F.near=E,F.far=z,P.updateProjectionMatrix(),F.updateProjectionMatrix(),b.updateProjectionMatrix());const A=b.parent,G=M.cameras;j(M,A);for(let ie=0;ie<G.length;ie++)j(G[ie],A);G.length===2?I(M,P,F):M.projectionMatrix.copy(P.projectionMatrix),Y(b,M,A)};function Y(b,A,G){G===null?b.matrix.copy(A.matrixWorld):(b.matrix.copy(G.matrixWorld),b.matrix.invert(),b.matrix.multiply(A.matrixWorld)),b.matrix.decompose(b.position,b.quaternion,b.scale),b.updateMatrixWorld(!0),b.projectionMatrix.copy(A.projectionMatrix),b.projectionMatrixInverse.copy(A.projectionMatrixInverse),b.isPerspectiveCamera&&(b.fov=Zi*2*Math.atan(1/b.projectionMatrix.elements[5]),b.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(b){l=b,d!==null&&(d.fixedFoveation=b),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=b)},this.hasDepthSensing=function(){return g.texture!==null};let L=null;function q(b,A){if(u=A.getViewerPose(h||a),v=A,u!==null){const G=u.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let ie=!1;G.length!==M.cameras.length&&(M.cameras.length=0,ie=!0);for(let X=0;X<G.length;X++){const se=G[X];let ce=null;if(f!==null)ce=f.getViewport(se);else{const Ae=c.getViewSubImage(d,se);ce=Ae.viewport,X===0&&(e.setRenderTargetTextures(_,Ae.colorTexture,d.ignoreDepthValues?void 0:Ae.depthStencilTexture),e.setRenderTarget(_))}let H=K[X];H===void 0&&(H=new jt,H.layers.enable(X),H.viewport=new Mt,K[X]=H),H.matrix.fromArray(se.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.projectionMatrix.fromArray(se.projectionMatrix),H.projectionMatrixInverse.copy(H.projectionMatrix).invert(),H.viewport.set(ce.x,ce.y,ce.width,ce.height),X===0&&(M.matrix.copy(H.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ie===!0&&M.cameras.push(H)}const te=r.enabledFeatures;if(te&&te.includes("depth-sensing")){const X=c.getDepthInformation(G[0]);X&&X.isValid&&X.texture&&g.init(e,X,r.renderState)}}for(let G=0;G<y.length;G++){const ie=x[G],te=y[G];ie!==null&&te!==void 0&&te.update(ie,A,h||a)}g.render(e,M),L&&L(b,A),A.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:A}),v=null}const U=new cc;U.setAnimationLoop(q),this.setAnimationLoop=function(b){L=b},this.dispose=function(){}}}function iv(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,ac(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,_,y,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),c(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,x)):m.isMeshMatcapMaterial?(s(p,m),v(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),g(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,_,y):m.isSpriteMaterial?h(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Kt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Kt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const _=e.get(m).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const y=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*y,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,_,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=y*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function c(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,_){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Kt&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const _=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function rv(i,e,t,n){let r={},s={},a=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,y){const x=y.program;n.uniformBlockBinding(_,x)}function h(_,y){let x=r[_.id];x===void 0&&(v(_),x=u(_),r[_.id]=x,_.addEventListener("dispose",p));const w=y.program;n.updateUBOMapping(_,w);const R=e.render.frame;s[_.id]!==R&&(d(_),s[_.id]=R)}function u(_){const y=c();_.__bindingPointIndex=y;const x=i.createBuffer(),w=_.__size,R=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,w,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function c(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const y=r[_.id],x=_.uniforms,w=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let R=0,P=x.length;R<P;R++){const F=Array.isArray(x[R])?x[R]:[x[R]];for(let K=0,M=F.length;K<M;K++){const E=F[K];if(f(E,R,K,w)===!0){const z=E.__offset,k=Array.isArray(E.value)?E.value:[E.value];let N=0;for(let W=0;W<k.length;W++){const Z=k[W],O=g(Z);typeof Z=="number"||typeof Z=="boolean"?(E.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,z+N,E.__data)):Z.isMatrix3?(E.__data[0]=Z.elements[0],E.__data[1]=Z.elements[1],E.__data[2]=Z.elements[2],E.__data[3]=0,E.__data[4]=Z.elements[3],E.__data[5]=Z.elements[4],E.__data[6]=Z.elements[5],E.__data[7]=0,E.__data[8]=Z.elements[6],E.__data[9]=Z.elements[7],E.__data[10]=Z.elements[8],E.__data[11]=0):(Z.toArray(E.__data,N),N+=O.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,y,x,w){const R=_.value,P=y+"_"+x;if(w[P]===void 0)return typeof R=="number"||typeof R=="boolean"?w[P]=R:w[P]=R.clone(),!0;{const F=w[P];if(typeof R=="number"||typeof R=="boolean"){if(F!==R)return w[P]=R,!0}else if(F.equals(R)===!1)return F.copy(R),!0}return!1}function v(_){const y=_.uniforms;let x=0;const w=16;for(let P=0,F=y.length;P<F;P++){const K=Array.isArray(y[P])?y[P]:[y[P]];for(let M=0,E=K.length;M<E;M++){const z=K[M],k=Array.isArray(z.value)?z.value:[z.value];for(let N=0,W=k.length;N<W;N++){const Z=k[N],O=g(Z),I=x%w;I!==0&&w-I<O.boundary&&(x+=w-I),z.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=x,x+=O.storage}}}const R=x%w;return R>0&&(x+=w-R),_.__size=x,_.__cache={},this}function g(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function p(_){const y=_.target;y.removeEventListener("dispose",p);const x=a.indexOf(y.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function m(){for(const _ in r)i.deleteBuffer(r[_]);a=[],r={},s={}}return{bind:l,update:h,dispose:m}}class vc{constructor(e={}){const{canvas:t=Zh(),context:n=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:c=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const f=new Uint32Array(4),v=new Int32Array(4);let g=null,p=null;const m=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ct,this._useLegacyLights=!1,this.toneMapping=Zn,this.toneMappingExposure=1;const y=this;let x=!1,w=0,R=0,P=null,F=-1,K=null;const M=new Mt,E=new Mt;let z=null;const k=new et(0);let N=0,W=t.width,Z=t.height,O=1,I=null,j=null;const Y=new Mt(0,0,W,Z),L=new Mt(0,0,W,Z);let q=!1;const U=new Ta;let b=!1,A=!1,G=null;const ie=new st,te=new ht,X=new Q,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ce(){return P===null?O:1}let H=n;function Ae(T,V){for(let $=0;$<T.length;$++){const B=T[$],J=t.getContext(B,V);if(J!==null)return J}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ya}`),t.addEventListener("webglcontextlost",it,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",_e,!1),H===null){const V=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&V.shift(),H=Ae(V,T),H===null)throw Ae(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ue,re,ae,We,be,C,S,ee,de,he,pe,Me,xe,ye,ze,je,ge,at,Qe,qe,He,Be,Je,tt;function ot(){ue=new up(H),re=new sp(H,ue,e),ue.init(re),Be=new Zm(H,ue,re),ae=new jm(H,ue,re),We=new pp(H),be=new Dm,C=new Km(H,ue,ae,be,re,Be,We),S=new op(y),ee=new hp(y),de=new Mu(H,re),Je=new ip(H,ue,de,re),he=new dp(H,de,We,Je),pe=new _p(H,he,de,We),Qe=new gp(H,re,C),je=new ap(be),Me=new Nm(y,S,ee,ue,re,Je,je),xe=new iv(y,be),ye=new Fm,ze=new Gm(ue,re),at=new np(y,S,ee,ae,pe,d,l),ge=new Ym(y,pe,re),tt=new rv(H,We,re,ae),qe=new rp(H,ue,We,re),He=new fp(H,ue,We,re),We.programs=Me.programs,y.capabilities=re,y.extensions=ue,y.properties=be,y.renderLists=ye,y.shadowMap=ge,y.state=ae,y.info=We}ot();const $e=new nv(y,H);this.xr=$e,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const T=ue.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ue.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(T){T!==void 0&&(O=T,this.setSize(W,Z,!1))},this.getSize=function(T){return T.set(W,Z)},this.setSize=function(T,V,$=!0){if($e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=T,Z=V,t.width=Math.floor(T*O),t.height=Math.floor(V*O),$===!0&&(t.style.width=T+"px",t.style.height=V+"px"),this.setViewport(0,0,T,V)},this.getDrawingBufferSize=function(T){return T.set(W*O,Z*O).floor()},this.setDrawingBufferSize=function(T,V,$){W=T,Z=V,O=$,t.width=Math.floor(T*$),t.height=Math.floor(V*$),this.setViewport(0,0,T,V)},this.getCurrentViewport=function(T){return T.copy(M)},this.getViewport=function(T){return T.copy(Y)},this.setViewport=function(T,V,$,B){T.isVector4?Y.set(T.x,T.y,T.z,T.w):Y.set(T,V,$,B),ae.viewport(M.copy(Y).multiplyScalar(O).floor())},this.getScissor=function(T){return T.copy(L)},this.setScissor=function(T,V,$,B){T.isVector4?L.set(T.x,T.y,T.z,T.w):L.set(T,V,$,B),ae.scissor(E.copy(L).multiplyScalar(O).floor())},this.getScissorTest=function(){return q},this.setScissorTest=function(T){ae.setScissorTest(q=T)},this.setOpaqueSort=function(T){I=T},this.setTransparentSort=function(T){j=T},this.getClearColor=function(T){return T.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor.apply(at,arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha.apply(at,arguments)},this.clear=function(T=!0,V=!0,$=!0){let B=0;if(T){let J=!1;if(P!==null){const ve=P.texture.format;J=ve===ql||ve===Xl||ve===Wl}if(J){const ve=P.texture.type,Ue=ve===$n||ve===qn||ve===Ma||ve===di||ve===Gl||ve===kl,Ce=at.getClearColor(),Ne=at.getClearAlpha(),we=Ce.r,Ye=Ce.g,Ke=Ce.b;Ue?(f[0]=we,f[1]=Ye,f[2]=Ke,f[3]=Ne,H.clearBufferuiv(H.COLOR,0,f)):(v[0]=we,v[1]=Ye,v[2]=Ke,v[3]=Ne,H.clearBufferiv(H.COLOR,0,v))}else B|=H.COLOR_BUFFER_BIT}V&&(B|=H.DEPTH_BUFFER_BIT),$&&(B|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",it,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),ye.dispose(),ze.dispose(),be.dispose(),S.dispose(),ee.dispose(),pe.dispose(),Je.dispose(),tt.dispose(),Me.dispose(),$e.dispose(),$e.removeEventListener("sessionstart",le),$e.removeEventListener("sessionend",oe),G&&(G.dispose(),G=null),fe.stop()};function it(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const T=We.autoReset,V=ge.enabled,$=ge.autoUpdate,B=ge.needsUpdate,J=ge.type;ot(),We.autoReset=T,ge.enabled=V,ge.autoUpdate=$,ge.needsUpdate=B,ge.type=J}function _e(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Se(T){const V=T.target;V.removeEventListener("dispose",Se),Ve(V)}function Ve(T){Xe(T),be.remove(T)}function Xe(T){const V=be.get(T).programs;V!==void 0&&(V.forEach(function($){Me.releaseProgram($)}),T.isShaderMaterial&&Me.releaseShaderCache(T))}this.renderBufferDirect=function(T,V,$,B,J,ve){V===null&&(V=se);const Ue=J.isMesh&&J.matrixWorld.determinant()<0,Ce=Oe(T,V,$,B,J);ae.setMaterial(B,Ue);let Ne=$.index,we=1;if(B.wireframe===!0){if(Ne=he.getWireframeAttribute($),Ne===void 0)return;we=2}const Ye=$.drawRange,Ke=$.attributes.position;let ft=Ye.start*we,bt=(Ye.start+Ye.count)*we;ve!==null&&(ft=Math.max(ft,ve.start*we),bt=Math.min(bt,(ve.start+ve.count)*we)),Ne!==null?(ft=Math.max(ft,0),bt=Math.min(bt,Ne.count)):Ke!=null&&(ft=Math.max(ft,0),bt=Math.min(bt,Ke.count));const vt=bt-ft;if(vt<0||vt===1/0)return;Je.setup(J,B,Ce,$,Ne);let lt,gt=qe;if(Ne!==null&&(lt=de.get(Ne),gt=He,gt.setIndex(lt)),J.isMesh)B.wireframe===!0?(ae.setLineWidth(B.wireframeLinewidth*ce()),gt.setMode(H.LINES)):gt.setMode(H.TRIANGLES);else if(J.isLine){let Ge=B.linewidth;Ge===void 0&&(Ge=1),ae.setLineWidth(Ge*ce()),J.isLineSegments?gt.setMode(H.LINES):J.isLineLoop?gt.setMode(H.LINE_LOOP):gt.setMode(H.LINE_STRIP)}else J.isPoints?gt.setMode(H.POINTS):J.isSprite&&gt.setMode(H.TRIANGLES);if(J.isBatchedMesh)gt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else if(J.isInstancedMesh)gt.renderInstances(ft,vt,J.count);else if($.isInstancedBufferGeometry){const Ge=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,$t=Math.min($.instanceCount,Ge);gt.renderInstances(ft,vt,$t)}else gt.render(ft,vt)};function ut(T,V,$){T.transparent===!0&&T.side===xn&&T.forceSinglePass===!1?(T.side=Kt,T.needsUpdate=!0,ne(T,V,$),T.side=Un,T.needsUpdate=!0,ne(T,V,$),T.side=xn):ne(T,V,$)}this.compile=function(T,V,$=null){$===null&&($=T),p=ze.get($),p.init(),_.push(p),$.traverseVisible(function(J){J.isLight&&J.layers.test(V.layers)&&(p.pushLight(J),J.castShadow&&p.pushShadow(J))}),T!==$&&T.traverseVisible(function(J){J.isLight&&J.layers.test(V.layers)&&(p.pushLight(J),J.castShadow&&p.pushShadow(J))}),p.setupLights(y._useLegacyLights);const B=new Set;return T.traverse(function(J){const ve=J.material;if(ve)if(Array.isArray(ve))for(let Ue=0;Ue<ve.length;Ue++){const Ce=ve[Ue];ut(Ce,$,J),B.add(Ce)}else ut(ve,$,J),B.add(ve)}),_.pop(),p=null,B},this.compileAsync=function(T,V,$=null){const B=this.compile(T,V,$);return new Promise(J=>{function ve(){if(B.forEach(function(Ue){be.get(Ue).currentProgram.isReady()&&B.delete(Ue)}),B.size===0){J(T);return}setTimeout(ve,10)}ue.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let mt=null;function dt(T){mt&&mt(T)}function le(){fe.stop()}function oe(){fe.start()}const fe=new cc;fe.setAnimationLoop(dt),typeof self<"u"&&fe.setContext(self),this.setAnimationLoop=function(T){mt=T,$e.setAnimationLoop(T),T===null?fe.stop():fe.start()},$e.addEventListener("sessionstart",le),$e.addEventListener("sessionend",oe),this.render=function(T,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),$e.enabled===!0&&$e.isPresenting===!0&&($e.cameraAutoUpdate===!0&&$e.updateCamera(V),V=$e.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,V,P),p=ze.get(T,_.length),p.init(),_.push(p),ie.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),U.setFromProjectionMatrix(ie),A=this.localClippingEnabled,b=je.init(this.clippingPlanes,A),g=ye.get(T,m.length),g.init(),m.push(g),me(T,V,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(I,j),this.info.render.frame++,b===!0&&je.beginShadows();const $=p.state.shadowsArray;if(ge.render($,T,V),b===!0&&je.endShadows(),this.info.autoReset===!0&&this.info.reset(),($e.enabled===!1||$e.isPresenting===!1||$e.hasDepthSensing()===!1)&&at.render(g,T),p.setupLights(y._useLegacyLights),V.isArrayCamera){const B=V.cameras;for(let J=0,ve=B.length;J<ve;J++){const Ue=B[J];Ze(g,T,Ue,Ue.viewport)}}else Ze(g,T,V);P!==null&&(C.updateMultisampleRenderTarget(P),C.updateRenderTargetMipmap(P)),T.isScene===!0&&T.onAfterRender(y,T,V),Je.resetDefaultState(),F=-1,K=null,_.pop(),_.length>0?p=_[_.length-1]:p=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function me(T,V,$,B){if(T.visible===!1)return;if(T.layers.test(V.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(V);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||U.intersectsSprite(T)){B&&X.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ie);const Ue=pe.update(T),Ce=T.material;Ce.visible&&g.push(T,Ue,Ce,$,X.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||U.intersectsObject(T))){const Ue=pe.update(T),Ce=T.material;if(B&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),X.copy(T.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),X.copy(Ue.boundingSphere.center)),X.applyMatrix4(T.matrixWorld).applyMatrix4(ie)),Array.isArray(Ce)){const Ne=Ue.groups;for(let we=0,Ye=Ne.length;we<Ye;we++){const Ke=Ne[we],ft=Ce[Ke.materialIndex];ft&&ft.visible&&g.push(T,Ue,ft,$,X.z,Ke)}}else Ce.visible&&g.push(T,Ue,Ce,$,X.z,null)}}const ve=T.children;for(let Ue=0,Ce=ve.length;Ue<Ce;Ue++)me(ve[Ue],V,$,B)}function Ze(T,V,$,B){const J=T.opaque,ve=T.transmissive,Ue=T.transparent;p.setupLightsView($),b===!0&&je.setGlobalState(y.clippingPlanes,$),ve.length>0&&Fe(J,ve,V,$),B&&ae.viewport(M.copy(B)),J.length>0&&Ee(J,V,$),ve.length>0&&Ee(ve,V,$),Ue.length>0&&Ee(Ue,V,$),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function Fe(T,V,$,B){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;const ve=re.isWebGL2;G===null&&(G=new gi(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")?xr:$n,minFilter:Nn,samples:ve?4:0})),y.getDrawingBufferSize(te),ve?G.setSize(te.x,te.y):G.setSize(ls(te.x),ls(te.y));const Ue=y.getRenderTarget();y.setRenderTarget(G),y.getClearColor(k),N=y.getClearAlpha(),N<1&&y.setClearColor(16777215,.5),y.clear();const Ce=y.toneMapping;y.toneMapping=Zn,Ee(T,$,B),C.updateMultisampleRenderTarget(G),C.updateRenderTargetMipmap(G);let Ne=!1;for(let we=0,Ye=V.length;we<Ye;we++){const Ke=V[we],ft=Ke.object,bt=Ke.geometry,vt=Ke.material,lt=Ke.group;if(vt.side===xn&&ft.layers.test(B.layers)){const gt=vt.side;vt.side=Kt,vt.needsUpdate=!0,Le(ft,$,B,bt,vt,lt),vt.side=gt,vt.needsUpdate=!0,Ne=!0}}Ne===!0&&(C.updateMultisampleRenderTarget(G),C.updateRenderTargetMipmap(G)),y.setRenderTarget(Ue),y.setClearColor(k,N),y.toneMapping=Ce}function Ee(T,V,$){const B=V.isScene===!0?V.overrideMaterial:null;for(let J=0,ve=T.length;J<ve;J++){const Ue=T[J],Ce=Ue.object,Ne=Ue.geometry,we=B===null?Ue.material:B,Ye=Ue.group;Ce.layers.test($.layers)&&Le(Ce,V,$,Ne,we,Ye)}}function Le(T,V,$,B,J,ve){T.onBeforeRender(y,V,$,B,J,ve),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),J.onBeforeRender(y,V,$,B,T,ve),J.transparent===!0&&J.side===xn&&J.forceSinglePass===!1?(J.side=Kt,J.needsUpdate=!0,y.renderBufferDirect($,V,B,J,T,ve),J.side=Un,J.needsUpdate=!0,y.renderBufferDirect($,V,B,J,T,ve),J.side=xn):y.renderBufferDirect($,V,B,J,T,ve),T.onAfterRender(y,V,$,B,J,ve)}function ne(T,V,$){V.isScene!==!0&&(V=se);const B=be.get(T),J=p.state.lights,ve=p.state.shadowsArray,Ue=J.state.version,Ce=Me.getParameters(T,J.state,ve,V,$),Ne=Me.getProgramCacheKey(Ce);let we=B.programs;B.environment=T.isMeshStandardMaterial?V.environment:null,B.fog=V.fog,B.envMap=(T.isMeshStandardMaterial?ee:S).get(T.envMap||B.environment),we===void 0&&(T.addEventListener("dispose",Se),we=new Map,B.programs=we);let Ye=we.get(Ne);if(Ye!==void 0){if(B.currentProgram===Ye&&B.lightsStateVersion===Ue)return Ie(T,Ce),Ye}else Ce.uniforms=Me.getUniforms(T),T.onBuild($,Ce,y),T.onBeforeCompile(Ce,y),Ye=Me.acquireProgram(Ce,Ne),we.set(Ne,Ye),B.uniforms=Ce.uniforms;const Ke=B.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ke.clippingPlanes=je.uniform),Ie(T,Ce),B.needsLights=Te(T),B.lightsStateVersion=Ue,B.needsLights&&(Ke.ambientLightColor.value=J.state.ambient,Ke.lightProbe.value=J.state.probe,Ke.directionalLights.value=J.state.directional,Ke.directionalLightShadows.value=J.state.directionalShadow,Ke.spotLights.value=J.state.spot,Ke.spotLightShadows.value=J.state.spotShadow,Ke.rectAreaLights.value=J.state.rectArea,Ke.ltc_1.value=J.state.rectAreaLTC1,Ke.ltc_2.value=J.state.rectAreaLTC2,Ke.pointLights.value=J.state.point,Ke.pointLightShadows.value=J.state.pointShadow,Ke.hemisphereLights.value=J.state.hemi,Ke.directionalShadowMap.value=J.state.directionalShadowMap,Ke.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ke.spotShadowMap.value=J.state.spotShadowMap,Ke.spotLightMatrix.value=J.state.spotLightMatrix,Ke.spotLightMap.value=J.state.spotLightMap,Ke.pointShadowMap.value=J.state.pointShadowMap,Ke.pointShadowMatrix.value=J.state.pointShadowMatrix),B.currentProgram=Ye,B.uniformsList=null,Ye}function Re(T){if(T.uniformsList===null){const V=T.currentProgram.getUniforms();T.uniformsList=ts.seqWithValue(V.seq,T.uniforms)}return T.uniformsList}function Ie(T,V){const $=be.get(T);$.outputColorSpace=V.outputColorSpace,$.batching=V.batching,$.instancing=V.instancing,$.instancingColor=V.instancingColor,$.skinning=V.skinning,$.morphTargets=V.morphTargets,$.morphNormals=V.morphNormals,$.morphColors=V.morphColors,$.morphTargetsCount=V.morphTargetsCount,$.numClippingPlanes=V.numClippingPlanes,$.numIntersection=V.numClipIntersection,$.vertexAlphas=V.vertexAlphas,$.vertexTangents=V.vertexTangents,$.toneMapping=V.toneMapping}function Oe(T,V,$,B,J){V.isScene!==!0&&(V=se),C.resetTextureUnits();const ve=V.fog,Ue=B.isMeshStandardMaterial?V.environment:null,Ce=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ht,Ne=(B.isMeshStandardMaterial?ee:S).get(B.envMap||Ue),we=B.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ye=!!$.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ke=!!$.morphAttributes.position,ft=!!$.morphAttributes.normal,bt=!!$.morphAttributes.color;let vt=Zn;B.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(vt=y.toneMapping);const lt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,gt=lt!==void 0?lt.length:0,Ge=be.get(B),$t=p.state.lights;if(b===!0&&(A===!0||T!==K)){const It=T===K&&B.id===F;je.setState(B,T,It)}let ct=!1;B.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==$t.state.version||Ge.outputColorSpace!==Ce||J.isBatchedMesh&&Ge.batching===!1||!J.isBatchedMesh&&Ge.batching===!0||J.isInstancedMesh&&Ge.instancing===!1||!J.isInstancedMesh&&Ge.instancing===!0||J.isSkinnedMesh&&Ge.skinning===!1||!J.isSkinnedMesh&&Ge.skinning===!0||J.isInstancedMesh&&Ge.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Ge.instancingColor===!1&&J.instanceColor!==null||Ge.envMap!==Ne||B.fog===!0&&Ge.fog!==ve||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==je.numPlanes||Ge.numIntersection!==je.numIntersection)||Ge.vertexAlphas!==we||Ge.vertexTangents!==Ye||Ge.morphTargets!==Ke||Ge.morphNormals!==ft||Ge.morphColors!==bt||Ge.toneMapping!==vt||re.isWebGL2===!0&&Ge.morphTargetsCount!==gt)&&(ct=!0):(ct=!0,Ge.__version=B.version);let Et=Ge.currentProgram;ct===!0&&(Et=ne(B,V,J));let Lt=!1,Bt=!1,Jt=!1;const ke=Et.getUniforms(),Pt=Ge.uniforms;if(ae.useProgram(Et.program)&&(Lt=!0,Bt=!0,Jt=!0),B.id!==F&&(F=B.id,Bt=!0),Lt||K!==T){ke.setValue(H,"projectionMatrix",T.projectionMatrix),ke.setValue(H,"viewMatrix",T.matrixWorldInverse);const It=ke.map.cameraPosition;It!==void 0&&It.setValue(H,X.setFromMatrixPosition(T.matrixWorld)),re.logarithmicDepthBuffer&&ke.setValue(H,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ke.setValue(H,"isOrthographic",T.isOrthographicCamera===!0),K!==T&&(K=T,Bt=!0,Jt=!0)}if(J.isSkinnedMesh){ke.setOptional(H,J,"bindMatrix"),ke.setOptional(H,J,"bindMatrixInverse");const It=J.skeleton;It&&(re.floatVertexTextures?(It.boneTexture===null&&It.computeBoneTexture(),ke.setValue(H,"boneTexture",It.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}J.isBatchedMesh&&(ke.setOptional(H,J,"batchingTexture"),ke.setValue(H,"batchingTexture",J._matricesTexture,C));const Rt=$.morphAttributes;if((Rt.position!==void 0||Rt.normal!==void 0||Rt.color!==void 0&&re.isWebGL2===!0)&&Qe.update(J,$,Et),(Bt||Ge.receiveShadow!==J.receiveShadow)&&(Ge.receiveShadow=J.receiveShadow,ke.setValue(H,"receiveShadow",J.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Pt.envMap.value=Ne,Pt.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),Bt&&(ke.setValue(H,"toneMappingExposure",y.toneMappingExposure),Ge.needsLights&&Pe(Pt,Jt),ve&&B.fog===!0&&xe.refreshFogUniforms(Pt,ve),xe.refreshMaterialUniforms(Pt,B,O,Z,G),ts.upload(H,Re(Ge),Pt,C)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ts.upload(H,Re(Ge),Pt,C),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ke.setValue(H,"center",J.center),ke.setValue(H,"modelViewMatrix",J.modelViewMatrix),ke.setValue(H,"normalMatrix",J.normalMatrix),ke.setValue(H,"modelMatrix",J.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const It=B.uniformsGroups;for(let cn=0,vs=It.length;cn<vs;cn++)if(re.isWebGL2){const wr=It[cn];tt.update(wr,Et),tt.bind(wr,Et)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Et}function Pe(T,V){T.ambientLightColor.needsUpdate=V,T.lightProbe.needsUpdate=V,T.directionalLights.needsUpdate=V,T.directionalLightShadows.needsUpdate=V,T.pointLights.needsUpdate=V,T.pointLightShadows.needsUpdate=V,T.spotLights.needsUpdate=V,T.spotLightShadows.needsUpdate=V,T.rectAreaLights.needsUpdate=V,T.hemisphereLights.needsUpdate=V}function Te(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(T,V,$){be.get(T.texture).__webglTexture=V,be.get(T.depthTexture).__webglTexture=$;const B=be.get(T);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=$===void 0,B.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,V){const $=be.get(T);$.__webglFramebuffer=V,$.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(T,V=0,$=0){P=T,w=V,R=$;let B=!0,J=null,ve=!1,Ue=!1;if(T){const Ne=be.get(T);Ne.__useDefaultFramebuffer!==void 0?(ae.bindFramebuffer(H.FRAMEBUFFER,null),B=!1):Ne.__webglFramebuffer===void 0?C.setupRenderTarget(T):Ne.__hasExternalTextures&&C.rebindTextures(T,be.get(T.texture).__webglTexture,be.get(T.depthTexture).__webglTexture);const we=T.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(Ue=!0);const Ye=be.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ye[V])?J=Ye[V][$]:J=Ye[V],ve=!0):re.isWebGL2&&T.samples>0&&C.useMultisampledRTT(T)===!1?J=be.get(T).__webglMultisampledFramebuffer:Array.isArray(Ye)?J=Ye[$]:J=Ye,M.copy(T.viewport),E.copy(T.scissor),z=T.scissorTest}else M.copy(Y).multiplyScalar(O).floor(),E.copy(L).multiplyScalar(O).floor(),z=q;if(ae.bindFramebuffer(H.FRAMEBUFFER,J)&&re.drawBuffers&&B&&ae.drawBuffers(T,J),ae.viewport(M),ae.scissor(E),ae.setScissorTest(z),ve){const Ne=be.get(T.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ne.__webglTexture,$)}else if(Ue){const Ne=be.get(T.texture),we=V||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ne.__webglTexture,$||0,we)}F=-1},this.readRenderTargetPixels=function(T,V,$,B,J,ve,Ue){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ce=Ce[Ue]),Ce){ae.bindFramebuffer(H.FRAMEBUFFER,Ce);try{const Ne=T.texture,we=Ne.format,Ye=Ne.type;if(we!==sn&&Be.convert(we)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ke=Ye===xr&&(ue.has("EXT_color_buffer_half_float")||re.isWebGL2&&ue.has("EXT_color_buffer_float"));if(Ye!==$n&&Be.convert(Ye)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ye===yn&&(re.isWebGL2||ue.has("OES_texture_float")||ue.has("WEBGL_color_buffer_float")))&&!Ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=T.width-B&&$>=0&&$<=T.height-J&&H.readPixels(V,$,B,J,Be.convert(we),Be.convert(Ye),ve)}finally{const Ne=P!==null?be.get(P).__webglFramebuffer:null;ae.bindFramebuffer(H.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(T,V,$=0){const B=Math.pow(2,-$),J=Math.floor(V.image.width*B),ve=Math.floor(V.image.height*B);C.setTexture2D(V,0),H.copyTexSubImage2D(H.TEXTURE_2D,$,0,0,T.x,T.y,J,ve),ae.unbindTexture()},this.copyTextureToTexture=function(T,V,$,B=0){const J=V.image.width,ve=V.image.height,Ue=Be.convert($.format),Ce=Be.convert($.type);C.setTexture2D($,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,$.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,$.unpackAlignment),V.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,B,T.x,T.y,J,ve,Ue,Ce,V.image.data):V.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,B,T.x,T.y,V.mipmaps[0].width,V.mipmaps[0].height,Ue,V.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,B,T.x,T.y,Ue,Ce,V.image),B===0&&$.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),ae.unbindTexture()},this.copyTextureToTexture3D=function(T,V,$,B,J=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ve=T.max.x-T.min.x+1,Ue=T.max.y-T.min.y+1,Ce=T.max.z-T.min.z+1,Ne=Be.convert(B.format),we=Be.convert(B.type);let Ye;if(B.isData3DTexture)C.setTexture3D(B,0),Ye=H.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)C.setTexture2DArray(B,0),Ye=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,B.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,B.unpackAlignment);const Ke=H.getParameter(H.UNPACK_ROW_LENGTH),ft=H.getParameter(H.UNPACK_IMAGE_HEIGHT),bt=H.getParameter(H.UNPACK_SKIP_PIXELS),vt=H.getParameter(H.UNPACK_SKIP_ROWS),lt=H.getParameter(H.UNPACK_SKIP_IMAGES),gt=$.isCompressedTexture?$.mipmaps[J]:$.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,gt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,gt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,T.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,T.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,T.min.z),$.isDataTexture||$.isData3DTexture?H.texSubImage3D(Ye,J,V.x,V.y,V.z,ve,Ue,Ce,Ne,we,gt.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Ye,J,V.x,V.y,V.z,ve,Ue,Ce,Ne,gt.data)):H.texSubImage3D(Ye,J,V.x,V.y,V.z,ve,Ue,Ce,Ne,we,gt),H.pixelStorei(H.UNPACK_ROW_LENGTH,Ke),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ft),H.pixelStorei(H.UNPACK_SKIP_PIXELS,bt),H.pixelStorei(H.UNPACK_SKIP_ROWS,vt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,lt),J===0&&B.generateMipmaps&&H.generateMipmap(Ye),ae.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?C.setTextureCube(T,0):T.isData3DTexture?C.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?C.setTexture2DArray(T,0):C.setTexture2D(T,0),ae.unbindTexture()},this.resetState=function(){w=0,R=0,P=null,ae.reset(),Je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Sa?"display-p3":"srgb",t.unpackColorSpace=_t.workingColorSpace===hs?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ct?pi:Kl}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===pi?Ct:Ht}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class sv extends vc{}sv.prototype.isWebGL1Renderer=!0;class av extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class ov{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ca,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=mn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return mi("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const qt=new Q;class Aa{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=fn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),r=xt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),r=xt(r,this.array),s=xt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Aa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const cl=new Q,hl=new Mt,ul=new Mt,lv=new Q,dl=new st,Yr=new Q,qs=new ln,fl=new st,Ys=new us;class cv extends Vt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Wa,this.bindMatrix=new st,this.bindMatrixInverse=new st,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Tn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Yr),this.boundingBox.expandByPoint(Yr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ln),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Yr),this.boundingSphere.expandByPoint(Yr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qs.copy(this.boundingSphere),qs.applyMatrix4(r),e.ray.intersectsSphere(qs)!==!1&&(fl.copy(r).invert(),Ys.copy(e.ray).applyMatrix4(fl),!(this.boundingBox!==null&&Ys.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ys)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Mt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Wa?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ph?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;hl.fromBufferAttribute(r.attributes.skinIndex,e),ul.fromBufferAttribute(r.attributes.skinWeight,e),cl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=ul.getComponent(s);if(a!==0){const o=hl.getComponent(s);dl.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(lv.copy(cl).applyMatrix4(dl),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class gc extends At{constructor(){super(),this.isBone=!0,this.type="Bone"}}class hv extends Dt{constructor(e=null,t=1,n=1,r,s,a,o,l,h=zt,u=zt,c,d){super(null,a,o,l,h,u,r,s,c,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pl=new st,uv=new st;class Ra{constructor(e=[],t=[]){this.uuid=mn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new st)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new st;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:uv;pl.multiplyMatrices(o,t[s]),pl.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Ra(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new hv(t,e,e,sn,yn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new gc),this.bones.push(a),this.boneInverses.push(new st().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const a=t[r];e.bones.push(a.uuid);const o=n[r];e.boneInverses.push(o.toArray())}return e}}class fa extends Zt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Fi=new st,ml=new st,jr=[],vl=new Tn,dv=new st,cr=new Vt,hr=new ln;class fv extends Vt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fa(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,dv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Tn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fi),vl.copy(e.boundingBox).applyMatrix4(Fi),this.boundingBox.union(vl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ln),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fi),hr.copy(e.boundingSphere).applyMatrix4(Fi),this.boundingSphere.union(hr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,r=this.count;if(cr.geometry=this.geometry,cr.material=this.material,cr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hr.copy(this.boundingSphere),hr.applyMatrix4(n),e.ray.intersectsSphere(hr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Fi),ml.multiplyMatrices(n,Fi),cr.matrixWorld=ml,cr.raycast(e,jr);for(let a=0,o=jr.length;a<o;a++){const l=jr[a];l.instanceId=s,l.object=this,t.push(l)}jr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new fa(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class _c extends Sn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const gl=new Q,_l=new Q,xl=new st,js=new us,Kr=new ln;class Ca extends At{constructor(e=new vn,t=new _c){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)gl.fromBufferAttribute(t,r-1),_l.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=gl.distanceTo(_l);e.setAttribute("lineDistance",new on(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(r),Kr.radius+=s,e.ray.intersectsSphere(Kr)===!1)return;xl.copy(r).invert(),js.copy(e.ray).applyMatrix4(xl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=new Q,u=new Q,c=new Q,d=new Q,f=this.isLineSegments?2:1,v=n.index,p=n.attributes.position;if(v!==null){const m=Math.max(0,a.start),_=Math.min(v.count,a.start+a.count);for(let y=m,x=_-1;y<x;y+=f){const w=v.getX(y),R=v.getX(y+1);if(h.fromBufferAttribute(p,w),u.fromBufferAttribute(p,R),js.distanceSqToSegment(h,u,d,c)>l)continue;d.applyMatrix4(this.matrixWorld);const F=e.ray.origin.distanceTo(d);F<e.near||F>e.far||t.push({distance:F,point:c.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,a.start),_=Math.min(p.count,a.start+a.count);for(let y=m,x=_-1;y<x;y+=f){if(h.fromBufferAttribute(p,y),u.fromBufferAttribute(p,y+1),js.distanceSqToSegment(h,u,d,c)>l)continue;d.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||t.push({distance:R,point:c.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const yl=new Q,Ml=new Q;class pv extends Ca{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)yl.fromBufferAttribute(t,r),Ml.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+yl.distanceTo(Ml);e.setAttribute("lineDistance",new on(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class mv extends Ca{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class xc extends Sn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Sl=new st,pa=new us,Zr=new ln,$r=new Q;class vv extends At{constructor(e=new vn,t=new xc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(r),Zr.radius+=s,e.ray.intersectsSphere(Zr)===!1)return;Sl.copy(r).invert(),pa.copy(e.ray).applyMatrix4(Sl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=n.index,c=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let v=d,g=f;v<g;v++){const p=h.getX(v);$r.fromBufferAttribute(c,p),El($r,p,l,r,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let v=d,g=f;v<g;v++)$r.fromBufferAttribute(c,v),El($r,v,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function El(i,e,t,n,r,s,a){const o=pa.distanceSqToPoint(i);if(o<t){const l=new Q;pa.closestPointToPoint(i,l),l.applyMatrix4(n);const h=r.ray.origin.distanceTo(l);if(h<r.near||h>r.far)return;s.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Pa extends vn{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let h=0;const u=[],c=new Q,d=new Q,f=[],v=[],g=[],p=[];for(let m=0;m<=n;m++){const _=[],y=m/n;let x=0;m===0&&a===0?x=.5/t:m===n&&l===Math.PI&&(x=-.5/t);for(let w=0;w<=t;w++){const R=w/t;c.x=-e*Math.cos(r+R*s)*Math.sin(a+y*o),c.y=e*Math.cos(a+y*o),c.z=e*Math.sin(r+R*s)*Math.sin(a+y*o),v.push(c.x,c.y,c.z),d.copy(c).normalize(),g.push(d.x,d.y,d.z),p.push(R+x,1-y),_.push(h++)}u.push(_)}for(let m=0;m<n;m++)for(let _=0;_<t;_++){const y=u[m][_+1],x=u[m][_],w=u[m+1][_],R=u[m+1][_+1];(m!==0||a>0)&&f.push(y,x,R),(m!==n-1||l<Math.PI)&&f.push(x,w,R)}this.setIndex(f),this.setAttribute("position",new on(v,3)),this.setAttribute("normal",new on(g,3)),this.setAttribute("uv",new on(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class xi extends Sn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zl,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fn extends xi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ht(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new et(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Jr(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function gv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function _v(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Tl(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)r[a++]=i[o+l]}return r}function yc(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=i[r++];while(s!==void 0)}class Er{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class xv extends Er{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:go,endingEnd:go}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case _o:s=e,o=2*t-n;break;case xo:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case _o:a=e,l=2*n-t;break;case xo:a=1,l=n+r[1]-r[0];break;default:a=e-1,l=t}const h=(n-t)*.5,u=this.valueSize;this._weightPrev=h/(t-o),this._weightNext=h/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,h=l-o,u=this._offsetPrev,c=this._offsetNext,d=this._weightPrev,f=this._weightNext,v=(n-t)/(r-t),g=v*v,p=g*v,m=-d*p+2*d*g-d*v,_=(1+d)*p+(-1.5-2*d)*g+(-.5+d)*v+1,y=(-1-f)*p+(1.5+f)*g+.5*v,x=f*p-f*g;for(let w=0;w!==o;++w)s[w]=m*a[u+w]+_*a[h+w]+y*a[l+w]+x*a[c+w];return s}}class yv extends Er{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,h=l-o,u=(n-t)/(r-t),c=1-u;for(let d=0;d!==o;++d)s[d]=a[h+d]*c+a[l+d]*u;return s}}class Mv extends Er{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class wn{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Jr(t,this.TimeBufferType),this.values=Jr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Jr(e.times,Array),values:Jr(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Mv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new yv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new xv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case yr:t=this.InterpolantFactoryMethodDiscrete;break;case Ki:t=this.InterpolantFactoryMethodLinear;break;case Ss:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yr;case this.InterpolantFactoryMethodLinear:return Ki;case this.InterpolantFactoryMethodSmooth:return Ss}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&gv(r))for(let o=0,l=r.length;o!==l;++o){const h=r[o];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ss,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const h=e[o],u=e[o+1];if(h!==u&&(o!==1||h!==e[0]))if(r)l=!0;else{const c=o*n,d=c-n,f=c+n;for(let v=0;v!==n;++v){const g=t[c+v];if(g!==t[d+v]||g!==t[f+v]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const c=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[c+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,h=0;h!==n;++h)t[l+h]=t[o+h];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=Ki;class nr extends wn{}nr.prototype.ValueTypeName="bool";nr.prototype.ValueBufferType=Array;nr.prototype.DefaultInterpolation=yr;nr.prototype.InterpolantFactoryMethodLinear=void 0;nr.prototype.InterpolantFactoryMethodSmooth=void 0;class Mc extends wn{}Mc.prototype.ValueTypeName="color";class Ji extends wn{}Ji.prototype.ValueTypeName="number";class Sv extends Er{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(r-t);let h=e*o;for(let u=h+o;h!==u;h+=4)Qn.slerpFlat(s,0,a,h-o,a,h,l);return s}}class _i extends wn{InterpolantFactoryMethodLinear(e){return new Sv(this.times,this.values,this.getValueSize(),e)}}_i.prototype.ValueTypeName="quaternion";_i.prototype.DefaultInterpolation=Ki;_i.prototype.InterpolantFactoryMethodSmooth=void 0;class ir extends wn{}ir.prototype.ValueTypeName="string";ir.prototype.ValueBufferType=Array;ir.prototype.DefaultInterpolation=yr;ir.prototype.InterpolantFactoryMethodLinear=void 0;ir.prototype.InterpolantFactoryMethodSmooth=void 0;class Qi extends wn{}Qi.prototype.ValueTypeName="vector";class Ev{constructor(e,t=-1,n,r=Eh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=mn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(wv(n[a]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(wn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],h=[];l.push((o+s-1)%s,o,(o+1)%s),h.push(0,1,0);const u=_v(l);l=Tl(l,1,u),h=Tl(h,1,u),!r&&l[0]===0&&(l.push(s),h.push(h[0])),a.push(new Ji(".morphTargetInfluences["+t[o].name+"]",l,h).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const h=e[o],u=h.name.match(s);if(u&&u.length>1){const c=u[1];let d=r[c];d||(r[c]=d=[]),d.push(h)}}const a=[];for(const o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(c,d,f,v,g){if(f.length!==0){const p=[],m=[];yc(f,p,m,v),p.length!==0&&g.push(new c(d,p,m))}},r=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const h=e.hierarchy||[];for(let c=0;c<h.length;c++){const d=h[c].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let v;for(v=0;v<d.length;v++)if(d[v].morphTargets)for(let g=0;g<d[v].morphTargets.length;g++)f[d[v].morphTargets[g]]=-1;for(const g in f){const p=[],m=[];for(let _=0;_!==d[v].morphTargets.length;++_){const y=d[v];p.push(y.time),m.push(y.morphTarget===g?1:0)}r.push(new Ji(".morphTargetInfluence["+g+"]",p,m))}l=f.length*a}else{const f=".bones["+t[c].name+"]";n(Qi,f+".position",d,"pos",r),n(_i,f+".quaternion",d,"rot",r),n(Qi,f+".scale",d,"scl",r)}}return r.length===0?null:new this(s,l,r,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Tv(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ji;case"vector":case"vector2":case"vector3":case"vector4":return Qi;case"color":return Mc;case"quaternion":return _i;case"bool":case"boolean":return nr;case"string":return ir}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function wv(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Tv(i.type);if(i.times===void 0){const t=[],n=[];yc(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const jn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class bv{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,l;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,c){return h.push(u,c),this},this.removeHandler=function(u){const c=h.indexOf(u);return c!==-1&&h.splice(c,2),this},this.getHandler=function(u){for(let c=0,d=h.length;c<d;c+=2){const f=h[c],v=h[c+1];if(f.global&&(f.lastIndex=0),f.test(u))return v}return null}}}const Av=new bv;class rr{constructor(e){this.manager=e!==void 0?e:Av,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}rr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ln={};class Rv extends Error{constructor(e,t){super(e),this.response=t}}class Sc extends rr{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=jn.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ln[e]!==void 0){Ln[e].push({onLoad:t,onProgress:n,onError:r});return}Ln[e]=[],Ln[e].push({onLoad:t,onProgress:n,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const u=Ln[e],c=h.body.getReader(),d=h.headers.get("Content-Length")||h.headers.get("X-File-Size"),f=d?parseInt(d):0,v=f!==0;let g=0;const p=new ReadableStream({start(m){_();function _(){c.read().then(({done:y,value:x})=>{if(y)m.close();else{g+=x.byteLength;const w=new ProgressEvent("progress",{lengthComputable:v,loaded:g,total:f});for(let R=0,P=u.length;R<P;R++){const F=u[R];F.onProgress&&F.onProgress(w)}m.enqueue(x),_()}})}}});return new Response(p)}else throw new Rv(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(l){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return h.json();default:if(o===void 0)return h.text();{const c=/charset="?([^;"\s]*)"?/i.exec(o),d=c&&c[1]?c[1].toLowerCase():void 0,f=new TextDecoder(d);return h.arrayBuffer().then(v=>f.decode(v))}}}).then(h=>{jn.add(e,h);const u=Ln[e];delete Ln[e];for(let c=0,d=u.length;c<d;c++){const f=u[c];f.onLoad&&f.onLoad(h)}}).catch(h=>{const u=Ln[e];if(u===void 0)throw this.manager.itemError(e),h;delete Ln[e];for(let c=0,d=u.length;c<d;c++){const f=u[c];f.onError&&f.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Cv extends rr{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=jn.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Mr("img");function l(){u(),jn.add(e,this),t&&t(this),s.manager.itemEnd(e)}function h(c){u(),r&&r(c),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",h,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Ec extends rr{constructor(e){super(e)}load(e,t,n,r){const s=new Dt,a=new Cv(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class ms extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ks=new st,wl=new Q,bl=new Q;class La{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ta,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;wl.setFromMatrixPosition(e.matrixWorld),t.position.copy(wl),bl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bl),t.updateMatrixWorld(),Ks.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ks),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ks)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Pv extends La{constructor(){super(new jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Zi*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Lv extends ms{constructor(e,t,n=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Pv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Al=new st,ur=new Q,Zs=new Q;class Iv extends La{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ht(4,2),this._viewportCount=6,this._viewports=[new Mt(2,1,1,1),new Mt(0,1,1,1),new Mt(3,1,1,1),new Mt(1,1,1,1),new Mt(3,0,1,1),new Mt(1,0,1,1)],this._cubeDirections=[new Q(1,0,0),new Q(-1,0,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,1,0),new Q(0,-1,0)],this._cubeUps=[new Q(0,1,0),new Q(0,1,0),new Q(0,1,0),new Q(0,1,0),new Q(0,0,1),new Q(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ur.setFromMatrixPosition(e.matrixWorld),n.position.copy(ur),Zs.copy(n.position),Zs.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Zs),n.updateMatrixWorld(),r.makeTranslation(-ur.x,-ur.y,-ur.z),Al.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Al)}}class Nv extends ms{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Iv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Dv extends La{constructor(){super(new wa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ia extends ms{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new Dv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Uv extends ms{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class gr{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Fv extends rr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=jn.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(h=>{t&&t(h),s.manager.itemEnd(e)}).catch(h=>{r&&r(h)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(h){return jn.add(e,h),t&&t(h),s.manager.itemEnd(e),h}).catch(function(h){r&&r(h),jn.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});jn.add(e,l),s.manager.itemStart(e)}}const Na="\\[\\]\\.:\\/",Bv=new RegExp("["+Na+"]","g"),Da="[^"+Na+"]",Ov="[^"+Na.replace("\\.","")+"]",zv=/((?:WC+[\/:])*)/.source.replace("WC",Da),Vv=/(WCOD+)?/.source.replace("WCOD",Ov),Hv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Da),Gv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Da),kv=new RegExp("^"+zv+Vv+Hv+Gv+"$"),Wv=["material","materials","bones","map"];class Xv{constructor(e,t,n){const r=n||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class yt{constructor(e,t,n){this.path=t,this.parsedPath=n||yt.parseTrackName(t),this.node=yt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new yt.Composite(e,t,n):new yt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Bv,"")}static parseTrackName(e){const t=kv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);Wv.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=yt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===h){h=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const a=e[r];if(a===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}yt.Composite=Xv;yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ya}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ya);function Qr(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Tc={exports:{}};(function(i,e){(function(t){i.exports=t()})(function(){return function t(n,r,s){function a(h,u){if(!r[h]){if(!n[h]){var c=typeof Qr=="function"&&Qr;if(!u&&c)return c(h,!0);if(o)return o(h,!0);throw new Error("Cannot find module '"+h+"'")}var d=r[h]={exports:{}};n[h][0].call(d.exports,function(f){var v=n[h][1][f];return a(v||f)},d,d.exports,t,n,r,s)}return r[h].exports}for(var o=typeof Qr=="function"&&Qr,l=0;l<s.length;l++)a(s[l]);return a}({1:[function(t,n,r){n.exports={name:"cannon",version:"0.6.2",description:"A lightweight 3D physics engine written in JavaScript.",homepage:"https://github.com/schteppe/cannon.js",author:"Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",keywords:["cannon.js","cannon","physics","engine","3d"],main:"./build/cannon.js",engines:{node:"*"},repository:{type:"git",url:"https://github.com/schteppe/cannon.js.git"},bugs:{url:"https://github.com/schteppe/cannon.js/issues"},licenses:[{type:"MIT"}],devDependencies:{jshint:"latest","uglify-js":"latest",nodeunit:"^0.9.0",grunt:"~0.4.0","grunt-contrib-jshint":"~0.1.1","grunt-contrib-nodeunit":"^0.4.1","grunt-contrib-concat":"~0.1.3","grunt-contrib-uglify":"^0.5.1","grunt-browserify":"^2.1.4","grunt-contrib-yuidoc":"^0.5.2",browserify:"*"},dependencies:{}}},{}],2:[function(t,n,r){n.exports={version:t("../package.json").version,AABB:t("./collision/AABB"),ArrayCollisionMatrix:t("./collision/ArrayCollisionMatrix"),Body:t("./objects/Body"),Box:t("./shapes/Box"),Broadphase:t("./collision/Broadphase"),Constraint:t("./constraints/Constraint"),ContactEquation:t("./equations/ContactEquation"),Narrowphase:t("./world/Narrowphase"),ConeTwistConstraint:t("./constraints/ConeTwistConstraint"),ContactMaterial:t("./material/ContactMaterial"),ConvexPolyhedron:t("./shapes/ConvexPolyhedron"),Cylinder:t("./shapes/Cylinder"),DistanceConstraint:t("./constraints/DistanceConstraint"),Equation:t("./equations/Equation"),EventTarget:t("./utils/EventTarget"),FrictionEquation:t("./equations/FrictionEquation"),GSSolver:t("./solver/GSSolver"),GridBroadphase:t("./collision/GridBroadphase"),Heightfield:t("./shapes/Heightfield"),HingeConstraint:t("./constraints/HingeConstraint"),LockConstraint:t("./constraints/LockConstraint"),Mat3:t("./math/Mat3"),Material:t("./material/Material"),NaiveBroadphase:t("./collision/NaiveBroadphase"),ObjectCollisionMatrix:t("./collision/ObjectCollisionMatrix"),Pool:t("./utils/Pool"),Particle:t("./shapes/Particle"),Plane:t("./shapes/Plane"),PointToPointConstraint:t("./constraints/PointToPointConstraint"),Quaternion:t("./math/Quaternion"),Ray:t("./collision/Ray"),RaycastVehicle:t("./objects/RaycastVehicle"),RaycastResult:t("./collision/RaycastResult"),RigidVehicle:t("./objects/RigidVehicle"),RotationalEquation:t("./equations/RotationalEquation"),RotationalMotorEquation:t("./equations/RotationalMotorEquation"),SAPBroadphase:t("./collision/SAPBroadphase"),SPHSystem:t("./objects/SPHSystem"),Shape:t("./shapes/Shape"),Solver:t("./solver/Solver"),Sphere:t("./shapes/Sphere"),SplitSolver:t("./solver/SplitSolver"),Spring:t("./objects/Spring"),Trimesh:t("./shapes/Trimesh"),Vec3:t("./math/Vec3"),Vec3Pool:t("./utils/Vec3Pool"),World:t("./world/World")}},{"../package.json":1,"./collision/AABB":3,"./collision/ArrayCollisionMatrix":4,"./collision/Broadphase":5,"./collision/GridBroadphase":6,"./collision/NaiveBroadphase":7,"./collision/ObjectCollisionMatrix":8,"./collision/Ray":9,"./collision/RaycastResult":10,"./collision/SAPBroadphase":11,"./constraints/ConeTwistConstraint":12,"./constraints/Constraint":13,"./constraints/DistanceConstraint":14,"./constraints/HingeConstraint":15,"./constraints/LockConstraint":16,"./constraints/PointToPointConstraint":17,"./equations/ContactEquation":19,"./equations/Equation":20,"./equations/FrictionEquation":21,"./equations/RotationalEquation":22,"./equations/RotationalMotorEquation":23,"./material/ContactMaterial":24,"./material/Material":25,"./math/Mat3":27,"./math/Quaternion":28,"./math/Vec3":30,"./objects/Body":31,"./objects/RaycastVehicle":32,"./objects/RigidVehicle":33,"./objects/SPHSystem":34,"./objects/Spring":35,"./shapes/Box":37,"./shapes/ConvexPolyhedron":38,"./shapes/Cylinder":39,"./shapes/Heightfield":40,"./shapes/Particle":41,"./shapes/Plane":42,"./shapes/Shape":43,"./shapes/Sphere":44,"./shapes/Trimesh":45,"./solver/GSSolver":46,"./solver/Solver":47,"./solver/SplitSolver":48,"./utils/EventTarget":49,"./utils/Pool":51,"./utils/Vec3Pool":54,"./world/Narrowphase":55,"./world/World":56}],3:[function(t,n,r){var s=t("../math/Vec3");t("../utils/Utils"),n.exports=a;function a(h){h=h||{},this.lowerBound=new s,h.lowerBound&&this.lowerBound.copy(h.lowerBound),this.upperBound=new s,h.upperBound&&this.upperBound.copy(h.upperBound)}var o=new s;a.prototype.setFromPoints=function(h,u,c,d){var f=this.lowerBound,v=this.upperBound,g=c;f.copy(h[0]),g&&g.vmult(f,f),v.copy(f);for(var p=1;p<h.length;p++){var m=h[p];g&&(g.vmult(m,o),m=o),m.x>v.x&&(v.x=m.x),m.x<f.x&&(f.x=m.x),m.y>v.y&&(v.y=m.y),m.y<f.y&&(f.y=m.y),m.z>v.z&&(v.z=m.z),m.z<f.z&&(f.z=m.z)}return u&&(u.vadd(f,f),u.vadd(v,v)),d&&(f.x-=d,f.y-=d,f.z-=d,v.x+=d,v.y+=d,v.z+=d),this},a.prototype.copy=function(h){return this.lowerBound.copy(h.lowerBound),this.upperBound.copy(h.upperBound),this},a.prototype.clone=function(){return new a().copy(this)},a.prototype.extend=function(h){var u=h.lowerBound.x;this.lowerBound.x>u&&(this.lowerBound.x=u);var c=h.upperBound.x;this.upperBound.x<c&&(this.upperBound.x=c);var u=h.lowerBound.y;this.lowerBound.y>u&&(this.lowerBound.y=u);var c=h.upperBound.y;this.upperBound.y<c&&(this.upperBound.y=c);var u=h.lowerBound.z;this.lowerBound.z>u&&(this.lowerBound.z=u);var c=h.upperBound.z;this.upperBound.z<c&&(this.upperBound.z=c)},a.prototype.overlaps=function(h){var u=this.lowerBound,c=this.upperBound,d=h.lowerBound,f=h.upperBound;return(d.x<=c.x&&c.x<=f.x||u.x<=f.x&&f.x<=c.x)&&(d.y<=c.y&&c.y<=f.y||u.y<=f.y&&f.y<=c.y)&&(d.z<=c.z&&c.z<=f.z||u.z<=f.z&&f.z<=c.z)},a.prototype.contains=function(h){var u=this.lowerBound,c=this.upperBound,d=h.lowerBound,f=h.upperBound;return u.x<=d.x&&c.x>=f.x&&u.y<=d.y&&c.y>=f.y&&u.z<=d.z&&c.z>=f.z},a.prototype.getCorners=function(h,u,c,d,f,v,g,p){var m=this.lowerBound,_=this.upperBound;h.copy(m),u.set(_.x,m.y,m.z),c.set(_.x,_.y,m.z),d.set(m.x,_.y,_.z),f.set(_.x,m.y,m.z),v.set(m.x,_.y,m.z),g.set(m.x,m.y,_.z),p.copy(_)};var l=[new s,new s,new s,new s,new s,new s,new s,new s];a.prototype.toLocalFrame=function(h,u){var c=l,d=c[0],f=c[1],v=c[2],g=c[3],p=c[4],m=c[5],_=c[6],y=c[7];this.getCorners(d,f,v,g,p,m,_,y);for(var x=0;x!==8;x++){var w=c[x];h.pointToLocal(w,w)}return u.setFromPoints(c)},a.prototype.toWorldFrame=function(h,u){var c=l,d=c[0],f=c[1],v=c[2],g=c[3],p=c[4],m=c[5],_=c[6],y=c[7];this.getCorners(d,f,v,g,p,m,_,y);for(var x=0;x!==8;x++){var w=c[x];h.pointToWorld(w,w)}return u.setFromPoints(c)}},{"../math/Vec3":30,"../utils/Utils":53}],4:[function(t,n,r){n.exports=s;function s(){this.matrix=[]}s.prototype.get=function(a,o){if(a=a.index,o=o.index,o>a){var l=o;o=a,a=l}return this.matrix[(a*(a+1)>>1)+o-1]},s.prototype.set=function(a,o,l){if(a=a.index,o=o.index,o>a){var h=o;o=a,a=h}this.matrix[(a*(a+1)>>1)+o-1]=l?1:0},s.prototype.reset=function(){for(var a=0,o=this.matrix.length;a!==o;a++)this.matrix[a]=0},s.prototype.setNumObjects=function(a){this.matrix.length=a*(a-1)>>1}},{}],5:[function(t,n,r){var s=t("../objects/Body"),a=t("../math/Vec3"),o=t("../math/Quaternion");t("../shapes/Shape"),t("../shapes/Plane"),n.exports=l;function l(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}l.prototype.collisionPairs=function(g,p,m){throw new Error("collisionPairs not implemented for this BroadPhase class!")};var h=s.STATIC|s.KINEMATIC;l.prototype.needBroadphaseCollision=function(g,p){return!(!(g.collisionFilterGroup&p.collisionFilterMask)||!(p.collisionFilterGroup&g.collisionFilterMask)||(g.type&h||g.sleepState===s.SLEEPING)&&(p.type&h||p.sleepState===s.SLEEPING))},l.prototype.intersectionTest=function(g,p,m,_){this.useBoundingBoxes?this.doBoundingBoxBroadphase(g,p,m,_):this.doBoundingSphereBroadphase(g,p,m,_)};var u=new a;new a,new o,new a,l.prototype.doBoundingSphereBroadphase=function(g,p,m,_){var y=u;p.position.vsub(g.position,y);var x=Math.pow(g.boundingRadius+p.boundingRadius,2),w=y.norm2();w<x&&(m.push(g),_.push(p))},l.prototype.doBoundingBoxBroadphase=function(g,p,m,_){g.aabbNeedsUpdate&&g.computeAABB(),p.aabbNeedsUpdate&&p.computeAABB(),g.aabb.overlaps(p.aabb)&&(m.push(g),_.push(p))};var c={keys:[]},d=[],f=[];l.prototype.makePairsUnique=function(g,p){for(var m=c,_=d,y=f,x=g.length,w=0;w!==x;w++)_[w]=g[w],y[w]=p[w];g.length=0,p.length=0;for(var w=0;w!==x;w++){var R=_[w].id,P=y[w].id,F=R<P?R+","+P:P+","+R;m[F]=w,m.keys.push(F)}for(var w=0;w!==m.keys.length;w++){var F=m.keys.pop(),K=m[F];g.push(_[K]),p.push(y[K]),delete m[F]}},l.prototype.setWorld=function(g){};var v=new a;l.boundingSphereCheck=function(g,p){var m=v;return g.position.vsub(p.position,m),Math.pow(g.shape.boundingSphereRadius+p.shape.boundingSphereRadius,2)>m.norm2()},l.prototype.aabbQuery=function(g,p,m){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Plane":42,"../shapes/Shape":43}],6:[function(t,n,r){n.exports=l;var s=t("./Broadphase"),a=t("../math/Vec3"),o=t("../shapes/Shape");function l(u,c,d,f,v){s.apply(this),this.nx=d||10,this.ny=f||10,this.nz=v||10,this.aabbMin=u||new a(100,100,100),this.aabbMax=c||new a(-100,-100,-100);var g=this.nx*this.ny*this.nz;if(g<=0)throw"GridBroadphase: Each dimension's n must be >0";this.bins=[],this.binLengths=[],this.bins.length=g,this.binLengths.length=g;for(var p=0;p<g;p++)this.bins[p]=[],this.binLengths[p]=0}l.prototype=new s,l.prototype.constructor=l;var h=new a;new a,l.prototype.collisionPairs=function(u,c,d){var f=u.numObjects(),v=u.bodies,ie=this.aabbMax,G=this.aabbMin,g=this.nx,p=this.ny,m=this.nz,_=p*m,y=m,x=1,w=ie.x,R=ie.y,P=ie.z,F=G.x,K=G.y,M=G.z,E=g/(w-F),z=p/(R-K),k=m/(P-M),N=(w-F)/g,W=(R-K)/p,Z=(P-M)/m,O=Math.sqrt(N*N+W*W+Z*Z)*.5,I=o.types,j=I.SPHERE,Y=I.PLANE;I.BOX,I.COMPOUND,I.CONVEXPOLYHEDRON;for(var L=this.bins,q=this.binLengths,U=this.bins.length,b=0;b!==U;b++)q[b]=0;var A=Math.ceil,G=Math.min,ie=Math.max;function te(ge,at,Qe,qe,He,Be,Je){var tt=(ge-F)*E|0,ot=(at-K)*z|0,$e=(Qe-M)*k|0,it=A((qe-F)*E),D=A((He-K)*z),_e=A((Be-M)*k);tt<0?tt=0:tt>=g&&(tt=g-1),ot<0?ot=0:ot>=p&&(ot=p-1),$e<0?$e=0:$e>=m&&($e=m-1),it<0?it=0:it>=g&&(it=g-1),D<0?D=0:D>=p&&(D=p-1),_e<0?_e=0:_e>=m&&(_e=m-1),tt*=_,ot*=y,$e*=x,it*=_,D*=y,_e*=x;for(var Se=tt;Se<=it;Se+=_)for(var Ve=ot;Ve<=D;Ve+=y)for(var Xe=$e;Xe<=_e;Xe+=x){var ut=Se+Ve+Xe;L[ut][q[ut]++]=Je}}for(var b=0;b!==f;b++){var X=v[b],se=X.shape;switch(se.type){case j:var ce=X.position.x,H=X.position.y,Ae=X.position.z,ue=se.radius;te(ce-ue,H-ue,Ae-ue,ce+ue,H+ue,Ae+ue,X);break;case Y:se.worldNormalNeedsUpdate&&se.computeWorldNormal(X.quaternion);var re=se.worldNormal,ae=F+N*.5-X.position.x,We=K+W*.5-X.position.y,be=M+Z*.5-X.position.z,C=h;C.set(ae,We,be);for(var S=0,ee=0;S!==g;S++,ee+=_,C.y=We,C.x+=N)for(var de=0,he=0;de!==p;de++,he+=y,C.z=be,C.y+=W)for(var pe=0,Me=0;pe!==m;pe++,Me+=x,C.z+=Z)if(C.dot(re)<O){var xe=ee+he+Me;L[xe][q[xe]++]=X}break;default:X.aabbNeedsUpdate&&X.computeAABB(),te(X.aabb.lowerBound.x,X.aabb.lowerBound.y,X.aabb.lowerBound.z,X.aabb.upperBound.x,X.aabb.upperBound.y,X.aabb.upperBound.z,X);break}}for(var b=0;b!==U;b++){var ye=q[b];if(ye>1)for(var ze=L[b],S=0;S!==ye;S++)for(var X=ze[S],de=0;de!==S;de++){var je=ze[de];this.needBroadphaseCollision(X,je)&&this.intersectionTest(X,je,c,d)}}this.makePairsUnique(c,d)}},{"../math/Vec3":30,"../shapes/Shape":43,"./Broadphase":5}],7:[function(t,n,r){n.exports=o;var s=t("./Broadphase"),a=t("./AABB");function o(){s.apply(this)}o.prototype=new s,o.prototype.constructor=o,o.prototype.collisionPairs=function(l,h,u){var c=l.bodies,d=c.length,f,v,g,p;for(f=0;f!==d;f++)for(v=0;v!==f;v++)g=c[f],p=c[v],this.needBroadphaseCollision(g,p)&&this.intersectionTest(g,p,h,u)},new a,o.prototype.aabbQuery=function(l,h,u){u=u||[];for(var c=0;c<l.bodies.length;c++){var d=l.bodies[c];d.aabbNeedsUpdate&&d.computeAABB(),d.aabb.overlaps(h)&&u.push(d)}return u}},{"./AABB":3,"./Broadphase":5}],8:[function(t,n,r){n.exports=s;function s(){this.matrix={}}s.prototype.get=function(a,o){if(a=a.id,o=o.id,o>a){var l=o;o=a,a=l}return a+"-"+o in this.matrix},s.prototype.set=function(a,o,l){if(a=a.id,o=o.id,o>a){var h=o;o=a,a=h}l?this.matrix[a+"-"+o]=!0:delete this.matrix[a+"-"+o]},s.prototype.reset=function(){this.matrix={}},s.prototype.setNumObjects=function(a){}},{}],9:[function(t,n,r){n.exports=c;var s=t("../math/Vec3"),a=t("../math/Quaternion"),o=t("../math/Transform");t("../shapes/ConvexPolyhedron"),t("../shapes/Box");var l=t("../collision/RaycastResult"),h=t("../shapes/Shape"),u=t("../collision/AABB");function c(U,b){this.from=U?U.clone():new s,this.to=b?b.clone():new s,this._direction=new s,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=c.ANY,this.result=new l,this.hasHit=!1,this.callback=function(A){}}c.prototype.constructor=c,c.CLOSEST=1,c.ANY=2,c.ALL=4;var d=new u,f=[];c.prototype.intersectWorld=function(U,b){return this.mode=b.mode||c.ANY,this.result=b.result||new l,this.skipBackfaces=!!b.skipBackfaces,this.collisionFilterMask=typeof b.collisionFilterMask<"u"?b.collisionFilterMask:-1,this.collisionFilterGroup=typeof b.collisionFilterGroup<"u"?b.collisionFilterGroup:-1,b.from&&this.from.copy(b.from),b.to&&this.to.copy(b.to),this.callback=b.callback||function(){},this.hasHit=!1,this.result.reset(),this._updateDirection(),this.getAABB(d),f.length=0,U.broadphase.aabbQuery(U,d,f),this.intersectBodies(f),this.hasHit};var v=new s,g=new s;c.pointInTriangle=p;function p(U,b,A,G){G.vsub(b,Y),A.vsub(b,v),U.vsub(b,g);var ie=Y.dot(Y),te=Y.dot(v),X=Y.dot(g),se=v.dot(v),ce=v.dot(g),H,Ae;return(H=se*X-te*ce)>=0&&(Ae=ie*ce-te*X)>=0&&H+Ae<ie*se-te*te}var m=new s,_=new a;c.prototype.intersectBody=function(U,b){b&&(this.result=b,this._updateDirection());var A=this.checkCollisionResponse;if(!(A&&!U.collisionResponse)&&!(!(this.collisionFilterGroup&U.collisionFilterMask)||!(U.collisionFilterGroup&this.collisionFilterMask)))for(var G=m,ie=_,te=0,X=U.shapes.length;te<X;te++){var se=U.shapes[te];if(!(A&&!se.collisionResponse)&&(U.quaternion.mult(U.shapeOrientations[te],ie),U.quaternion.vmult(U.shapeOffsets[te],G),G.vadd(U.position,G),this.intersectShape(se,ie,G,U),this.result._shouldStop))break}},c.prototype.intersectBodies=function(U,b){b&&(this.result=b,this._updateDirection());for(var A=0,G=U.length;!this.result._shouldStop&&A<G;A++)this.intersectBody(U[A])},c.prototype._updateDirection=function(){this.to.vsub(this.from,this._direction),this._direction.normalize()},c.prototype.intersectShape=function(U,b,A,G){var ie=this.from,te=q(ie,this._direction,A);if(!(te>U.boundingSphereRadius)){var X=this[U.type];X&&X.call(this,U,b,A,G)}},new s,new s;var y=new s,x=new s,w=new s,R=new s;new s,new l,c.prototype.intersectBox=function(U,b,A,G){return this.intersectConvex(U.convexPolyhedronRepresentation,b,A,G)},c.prototype[h.types.BOX]=c.prototype.intersectBox,c.prototype.intersectPlane=function(U,b,A,G){var ie=this.from,te=this.to,X=this._direction,se=new s(0,0,1);b.vmult(se,se);var ce=new s;ie.vsub(A,ce);var H=ce.dot(se);te.vsub(A,ce);var Ae=ce.dot(se);if(!(H*Ae>0)&&!(ie.distanceTo(te)<H)){var ue=se.dot(X);if(!(Math.abs(ue)<this.precision)){var re=new s,ae=new s,We=new s;ie.vsub(A,re);var be=-se.dot(re)/ue;X.scale(be,ae),ie.vadd(ae,We),this.reportIntersection(se,We,U,G,-1)}}},c.prototype[h.types.PLANE]=c.prototype.intersectPlane,c.prototype.getAABB=function(U){var b=this.to,A=this.from;U.lowerBound.x=Math.min(b.x,A.x),U.lowerBound.y=Math.min(b.y,A.y),U.lowerBound.z=Math.min(b.z,A.z),U.upperBound.x=Math.max(b.x,A.x),U.upperBound.y=Math.max(b.y,A.y),U.upperBound.z=Math.max(b.z,A.z)};var P={faceList:[0]};c.prototype.intersectHeightfield=function(U,b,A,G){U.data,U.elementSize;var ie=new s,te=new c(this.from,this.to);o.pointToLocalFrame(A,b,te.from,te.from),o.pointToLocalFrame(A,b,te.to,te.to);var X=[],se=null,ce=null,H=null,Ae=null,ue=U.getIndexOfPosition(te.from.x,te.from.y,X,!1);if(ue&&(se=X[0],ce=X[1],H=X[0],Ae=X[1]),ue=U.getIndexOfPosition(te.to.x,te.to.y,X,!1),ue&&((se===null||X[0]<se)&&(se=X[0]),(H===null||X[0]>H)&&(H=X[0]),(ce===null||X[1]<ce)&&(ce=X[1]),(Ae===null||X[1]>Ae)&&(Ae=X[1])),se!==null){var re=[];U.getRectMinMax(se,ce,H,Ae,re),re[0],re[1];for(var ae=se;ae<=H;ae++)for(var We=ce;We<=Ae;We++){if(this.result._shouldStop||(U.getConvexTrianglePillar(ae,We,!1),o.pointToWorldFrame(A,b,U.pillarOffset,ie),this.intersectConvex(U.pillarConvex,b,ie,G,P),this.result._shouldStop))return;U.getConvexTrianglePillar(ae,We,!0),o.pointToWorldFrame(A,b,U.pillarOffset,ie),this.intersectConvex(U.pillarConvex,b,ie,G,P)}}},c.prototype[h.types.HEIGHTFIELD]=c.prototype.intersectHeightfield;var F=new s,K=new s;c.prototype.intersectSphere=function(U,b,A,G){var ie=this.from,te=this.to,X=U.radius,se=Math.pow(te.x-ie.x,2)+Math.pow(te.y-ie.y,2)+Math.pow(te.z-ie.z,2),ce=2*((te.x-ie.x)*(ie.x-A.x)+(te.y-ie.y)*(ie.y-A.y)+(te.z-ie.z)*(ie.z-A.z)),H=Math.pow(ie.x-A.x,2)+Math.pow(ie.y-A.y,2)+Math.pow(ie.z-A.z,2)-Math.pow(X,2),Ae=Math.pow(ce,2)-4*se*H,ue=F,re=K;if(!(Ae<0))if(Ae===0)ie.lerp(te,Ae,ue),ue.vsub(A,re),re.normalize(),this.reportIntersection(re,ue,U,G,-1);else{var ae=(-ce-Math.sqrt(Ae))/(2*se),We=(-ce+Math.sqrt(Ae))/(2*se);if(ae>=0&&ae<=1&&(ie.lerp(te,ae,ue),ue.vsub(A,re),re.normalize(),this.reportIntersection(re,ue,U,G,-1)),this.result._shouldStop)return;We>=0&&We<=1&&(ie.lerp(te,We,ue),ue.vsub(A,re),re.normalize(),this.reportIntersection(re,ue,U,G,-1))}},c.prototype[h.types.SPHERE]=c.prototype.intersectSphere;var M=new s;new s,new s;var E=new s;c.prototype.intersectConvex=function(b,A,G,ie,te){for(var X=M,se=E,ce=te&&te.faceList||null,H=b.faces,Ae=b.vertices,ue=b.faceNormals,re=this._direction,ae=this.from,We=this.to,be=ae.distanceTo(We),C=ce?ce.length:H.length,S=this.result,ee=0;!S._shouldStop&&ee<C;ee++){var de=ce?ce[ee]:ee,he=H[de],pe=ue[de],Me=A,xe=G;se.copy(Ae[he[0]]),Me.vmult(se,se),se.vadd(xe,se),se.vsub(ae,se),Me.vmult(pe,X);var ye=re.dot(X);if(!(Math.abs(ye)<this.precision)){var ze=X.dot(se)/ye;if(!(ze<0)){re.mult(ze,y),y.vadd(ae,y),x.copy(Ae[he[0]]),Me.vmult(x,x),xe.vadd(x,x);for(var je=1;!S._shouldStop&&je<he.length-1;je++){w.copy(Ae[he[je]]),R.copy(Ae[he[je+1]]),Me.vmult(w,w),Me.vmult(R,R),xe.vadd(w,w),xe.vadd(R,R);var ge=y.distanceTo(ae);!(p(y,x,w,R)||p(y,w,x,R))||ge>be||this.reportIntersection(X,y,b,ie,de)}}}}},c.prototype[h.types.CONVEXPOLYHEDRON]=c.prototype.intersectConvex;var z=new s,k=new s,N=new s,W=new s,Z=new s,O=new s;new u;var I=[],j=new o;c.prototype.intersectTrimesh=function(b,A,G,ie,te){var X=z,se=I,ce=j,H=E,Ae=k,ue=N,re=W,ae=O,We=Z;te&&te.faceList;var be=b.indices;b.vertices,b.faceNormals;var C=this.from,S=this.to,ee=this._direction;ce.position.copy(G),ce.quaternion.copy(A),o.vectorToLocalFrame(G,A,ee,Ae),o.pointToLocalFrame(G,A,C,ue),o.pointToLocalFrame(G,A,S,re);var de=ue.distanceSquared(re);b.tree.rayQuery(this,ce,se);for(var he=0,pe=se.length;!this.result._shouldStop&&he!==pe;he++){var Me=se[he];b.getNormal(Me,X),b.getVertex(be[Me*3],x),x.vsub(ue,H);var xe=Ae.dot(X),ye=X.dot(H)/xe;if(!(ye<0)){Ae.scale(ye,y),y.vadd(ue,y),b.getVertex(be[Me*3+1],w),b.getVertex(be[Me*3+2],R);var ze=y.distanceSquared(ue);!(p(y,w,x,R)||p(y,x,w,R))||ze>de||(o.vectorToWorldFrame(A,X,We),o.pointToWorldFrame(G,A,y,ae),this.reportIntersection(We,ae,b,ie,Me))}}se.length=0},c.prototype[h.types.TRIMESH]=c.prototype.intersectTrimesh,c.prototype.reportIntersection=function(U,b,A,G,ie){var te=this.from,X=this.to,se=te.distanceTo(b),ce=this.result;if(!(this.skipBackfaces&&U.dot(this._direction)>0))switch(ce.hitFaceIndex=typeof ie<"u"?ie:-1,this.mode){case c.ALL:this.hasHit=!0,ce.set(te,X,U,b,A,G,se),ce.hasHit=!0,this.callback(ce);break;case c.CLOSEST:(se<ce.distance||!ce.hasHit)&&(this.hasHit=!0,ce.hasHit=!0,ce.set(te,X,U,b,A,G,se));break;case c.ANY:this.hasHit=!0,ce.hasHit=!0,ce.set(te,X,U,b,A,G,se),ce._shouldStop=!0;break}};var Y=new s,L=new s;function q(U,b,A){A.vsub(U,Y);var G=Y.dot(b);b.mult(G,L),L.vadd(U,L);var ie=A.distanceTo(L);return ie}},{"../collision/AABB":3,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/Box":37,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43}],10:[function(t,n,r){var s=t("../math/Vec3");n.exports=a;function a(){this.rayFromWorld=new s,this.rayToWorld=new s,this.hitNormalWorld=new s,this.hitPointWorld=new s,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1}a.prototype.reset=function(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1},a.prototype.abort=function(){this._shouldStop=!0},a.prototype.set=function(o,l,h,u,c,d,f){this.rayFromWorld.copy(o),this.rayToWorld.copy(l),this.hitNormalWorld.copy(h),this.hitPointWorld.copy(u),this.shape=c,this.body=d,this.distance=f}},{"../math/Vec3":30}],11:[function(t,n,r){t("../shapes/Shape");var s=t("../collision/Broadphase");n.exports=a;function a(o){s.apply(this),this.axisList=[],this.world=null,this.axisIndex=0;var l=this.axisList;this._addBodyHandler=function(h){l.push(h.body)},this._removeBodyHandler=function(h){var u=l.indexOf(h.body);u!==-1&&l.splice(u,1)},o&&this.setWorld(o)}a.prototype=new s,a.prototype.setWorld=function(o){this.axisList.length=0;for(var l=0;l<o.bodies.length;l++)this.axisList.push(o.bodies[l]);o.removeEventListener("addBody",this._addBodyHandler),o.removeEventListener("removeBody",this._removeBodyHandler),o.addEventListener("addBody",this._addBodyHandler),o.addEventListener("removeBody",this._removeBodyHandler),this.world=o,this.dirty=!0},a.insertionSortX=function(o){for(var l=1,h=o.length;l<h;l++){for(var u=o[l],c=l-1;c>=0&&!(o[c].aabb.lowerBound.x<=u.aabb.lowerBound.x);c--)o[c+1]=o[c];o[c+1]=u}return o},a.insertionSortY=function(o){for(var l=1,h=o.length;l<h;l++){for(var u=o[l],c=l-1;c>=0&&!(o[c].aabb.lowerBound.y<=u.aabb.lowerBound.y);c--)o[c+1]=o[c];o[c+1]=u}return o},a.insertionSortZ=function(o){for(var l=1,h=o.length;l<h;l++){for(var u=o[l],c=l-1;c>=0&&!(o[c].aabb.lowerBound.z<=u.aabb.lowerBound.z);c--)o[c+1]=o[c];o[c+1]=u}return o},a.prototype.collisionPairs=function(o,l,h){var u=this.axisList,c=u.length,d=this.axisIndex,f,v;for(this.dirty&&(this.sortList(),this.dirty=!1),f=0;f!==c;f++){var g=u[f];for(v=f+1;v<c;v++){var p=u[v];if(this.needBroadphaseCollision(g,p)){if(!a.checkBounds(g,p,d))break;this.intersectionTest(g,p,l,h)}}}},a.prototype.sortList=function(){for(var o=this.axisList,l=this.axisIndex,h=o.length,u=0;u!==h;u++){var c=o[u];c.aabbNeedsUpdate&&c.computeAABB()}l===0?a.insertionSortX(o):l===1?a.insertionSortY(o):l===2&&a.insertionSortZ(o)},a.checkBounds=function(o,l,h){var u,c;h===0?(u=o.position.x,c=l.position.x):h===1?(u=o.position.y,c=l.position.y):h===2&&(u=o.position.z,c=l.position.z);var d=o.boundingRadius,f=l.boundingRadius,v=u+d,g=c-f;return g<v},a.prototype.autoDetectAxis=function(){for(var o=0,l=0,h=0,u=0,c=0,d=0,f=this.axisList,v=f.length,g=1/v,p=0;p!==v;p++){var m=f[p],_=m.position.x;o+=_,l+=_*_;var y=m.position.y;h+=y,u+=y*y;var x=m.position.z;c+=x,d+=x*x}var w=l-o*o*g,R=u-h*h*g,P=d-c*c*g;w>R?w>P?this.axisIndex=0:this.axisIndex=2:R>P?this.axisIndex=1:this.axisIndex=2},a.prototype.aabbQuery=function(o,l,h){h=h||[],this.dirty&&(this.sortList(),this.dirty=!1);var u=this.axisIndex,c="x";u===1&&(c="y"),u===2&&(c="z");var d=this.axisList;l.lowerBound[c],l.upperBound[c];for(var f=0;f<d.length;f++){var v=d[f];v.aabbNeedsUpdate&&v.computeAABB(),v.aabb.overlaps(l)&&h.push(v)}return h}},{"../collision/Broadphase":5,"../shapes/Shape":43}],12:[function(t,n,r){n.exports=h,t("./Constraint");var s=t("./PointToPointConstraint"),a=t("../equations/ConeEquation"),o=t("../equations/RotationalEquation");t("../equations/ContactEquation");var l=t("../math/Vec3");function h(u,c,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6,v=d.pivotA?d.pivotA.clone():new l,g=d.pivotB?d.pivotB.clone():new l;this.axisA=d.axisA?d.axisA.clone():new l,this.axisB=d.axisB?d.axisB.clone():new l,s.call(this,u,v,c,g,f),this.collideConnected=!!d.collideConnected,this.angle=typeof d.angle<"u"?d.angle:0;var p=this.coneEquation=new a(u,c,d),m=this.twistEquation=new o(u,c,d);this.twistAngle=typeof d.twistAngle<"u"?d.twistAngle:0,p.maxForce=0,p.minForce=-f,m.maxForce=0,m.minForce=-f,this.equations.push(p,m)}h.prototype=new s,h.constructor=h,new l,new l,h.prototype.update=function(){var u=this.bodyA,c=this.bodyB,d=this.coneEquation,f=this.twistEquation;s.prototype.update.call(this),u.vectorToWorldFrame(this.axisA,d.axisA),c.vectorToWorldFrame(this.axisB,d.axisB),this.axisA.tangents(f.axisA,f.axisA),u.vectorToWorldFrame(f.axisA,f.axisA),this.axisB.tangents(f.axisB,f.axisB),c.vectorToWorldFrame(f.axisB,f.axisB),d.angle=this.angle,f.maxAngle=this.twistAngle}},{"../equations/ConeEquation":18,"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],13:[function(t,n,r){n.exports=a;var s=t("../utils/Utils");function a(o,l,h){h=s.defaults(h,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=o,this.bodyB=l,this.id=a.idCounter++,this.collideConnected=h.collideConnected,h.wakeUpBodies&&(o&&o.wakeUp(),l&&l.wakeUp())}a.prototype.update=function(){throw new Error("method update() not implmemented in this Constraint subclass!")},a.prototype.enable=function(){for(var o=this.equations,l=0;l<o.length;l++)o[l].enabled=!0},a.prototype.disable=function(){for(var o=this.equations,l=0;l<o.length;l++)o[l].enabled=!1},a.idCounter=0},{"../utils/Utils":53}],14:[function(t,n,r){n.exports=o;var s=t("./Constraint"),a=t("../equations/ContactEquation");function o(l,h,u,c){s.call(this,l,h),typeof u>"u"&&(u=l.position.distanceTo(h.position)),typeof c>"u"&&(c=1e6),this.distance=u;var d=this.distanceEquation=new a(l,h);this.equations.push(d),d.minForce=-c,d.maxForce=c}o.prototype=new s,o.prototype.update=function(){var l=this.bodyA,h=this.bodyB,u=this.distanceEquation,c=this.distance*.5,d=u.ni;h.position.vsub(l.position,d),d.normalize(),d.mult(c,u.ri),d.mult(-c,u.rj)}},{"../equations/ContactEquation":19,"./Constraint":13}],15:[function(t,n,r){n.exports=h,t("./Constraint");var s=t("./PointToPointConstraint"),a=t("../equations/RotationalEquation"),o=t("../equations/RotationalMotorEquation");t("../equations/ContactEquation");var l=t("../math/Vec3");function h(d,f,v){v=v||{};var g=typeof v.maxForce<"u"?v.maxForce:1e6,p=v.pivotA?v.pivotA.clone():new l,m=v.pivotB?v.pivotB.clone():new l;s.call(this,d,p,f,m,g);var _=this.axisA=v.axisA?v.axisA.clone():new l(1,0,0);_.normalize();var y=this.axisB=v.axisB?v.axisB.clone():new l(1,0,0);y.normalize();var x=this.rotationalEquation1=new a(d,f,v),w=this.rotationalEquation2=new a(d,f,v),R=this.motorEquation=new o(d,f,g);R.enabled=!1,this.equations.push(x,w,R)}h.prototype=new s,h.constructor=h,h.prototype.enableMotor=function(){this.motorEquation.enabled=!0},h.prototype.disableMotor=function(){this.motorEquation.enabled=!1},h.prototype.setMotorSpeed=function(d){this.motorEquation.targetVelocity=d},h.prototype.setMotorMaxForce=function(d){this.motorEquation.maxForce=d,this.motorEquation.minForce=-d};var u=new l,c=new l;h.prototype.update=function(){var d=this.bodyA,f=this.bodyB,v=this.motorEquation,g=this.rotationalEquation1,p=this.rotationalEquation2,m=u,_=c,y=this.axisA,x=this.axisB;s.prototype.update.call(this),d.quaternion.vmult(y,m),f.quaternion.vmult(x,_),m.tangents(g.axisA,p.axisA),g.axisB.copy(_),p.axisB.copy(_),this.motorEquation.enabled&&(d.quaternion.vmult(this.axisA,v.axisA),f.quaternion.vmult(this.axisB,v.axisB))}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],16:[function(t,n,r){n.exports=l,t("./Constraint");var s=t("./PointToPointConstraint"),a=t("../equations/RotationalEquation");t("../equations/RotationalMotorEquation"),t("../equations/ContactEquation");var o=t("../math/Vec3");function l(h,u,c){c=c||{};var d=typeof c.maxForce<"u"?c.maxForce:1e6,f=new o,v=new o,g=new o;h.position.vadd(u.position,g),g.scale(.5,g),u.pointToLocalFrame(g,v),h.pointToLocalFrame(g,f),s.call(this,h,f,u,v,d);var p=this.rotationalEquation1=new a(h,u,c),m=this.rotationalEquation2=new a(h,u,c),_=this.rotationalEquation3=new a(h,u,c);this.equations.push(p,m,_)}l.prototype=new s,l.constructor=l,new o,new o,l.prototype.update=function(){var h=this.bodyA,u=this.bodyB;this.motorEquation;var c=this.rotationalEquation1,d=this.rotationalEquation2,f=this.rotationalEquation3;s.prototype.update.call(this),h.vectorToWorldFrame(o.UNIT_X,c.axisA),u.vectorToWorldFrame(o.UNIT_Y,c.axisB),h.vectorToWorldFrame(o.UNIT_Y,d.axisA),u.vectorToWorldFrame(o.UNIT_Z,d.axisB),h.vectorToWorldFrame(o.UNIT_Z,f.axisA),u.vectorToWorldFrame(o.UNIT_X,f.axisB)}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],17:[function(t,n,r){n.exports=l;var s=t("./Constraint"),a=t("../equations/ContactEquation"),o=t("../math/Vec3");function l(h,u,c,d,f){s.call(this,h,c),f=typeof f<"u"?f:1e6,this.pivotA=u?u.clone():new o,this.pivotB=d?d.clone():new o;var v=this.equationX=new a(h,c),g=this.equationY=new a(h,c),p=this.equationZ=new a(h,c);this.equations.push(v,g,p),v.minForce=g.minForce=p.minForce=-f,v.maxForce=g.maxForce=p.maxForce=f,v.ni.set(1,0,0),g.ni.set(0,1,0),p.ni.set(0,0,1)}l.prototype=new s,l.prototype.update=function(){var h=this.bodyA,u=this.bodyB,c=this.equationX,d=this.equationY,f=this.equationZ;h.quaternion.vmult(this.pivotA,c.ri),u.quaternion.vmult(this.pivotB,c.rj),d.ri.copy(c.ri),d.rj.copy(c.rj),f.ri.copy(c.ri),f.rj.copy(c.rj)}},{"../equations/ContactEquation":19,"../math/Vec3":30,"./Constraint":13}],18:[function(t,n,r){n.exports=o;var s=t("../math/Vec3");t("../math/Mat3");var a=t("./Equation");function o(u,c,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6;a.call(this,u,c,-f,f),this.axisA=d.axisA?d.axisA.clone():new s(1,0,0),this.axisB=d.axisB?d.axisB.clone():new s(0,1,0),this.angle=typeof d.angle<"u"?d.angle:0}o.prototype=new a,o.prototype.constructor=o;var l=new s,h=new s;o.prototype.computeB=function(u){var c=this.a,d=this.b,f=this.axisA,v=this.axisB,g=l,p=h,m=this.jacobianElementA,_=this.jacobianElementB;f.cross(v,g),v.cross(f,p),m.rotational.copy(p),_.rotational.copy(g);var y=Math.cos(this.angle)-f.dot(v),x=this.computeGW(),w=this.computeGiMf(),R=-y*c-x*d-u*w;return R}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],19:[function(t,n,r){n.exports=o;var s=t("./Equation"),a=t("../math/Vec3");t("../math/Mat3");function o(p,m,_){_=typeof _<"u"?_:1e6,s.call(this,p,m,0,_),this.restitution=0,this.ri=new a,this.rj=new a,this.ni=new a}o.prototype=new s,o.prototype.constructor=o;var l=new a,h=new a,u=new a;o.prototype.computeB=function(p){var m=this.a,_=this.b,y=this.bi,x=this.bj,w=this.ri,R=this.rj,P=l,F=h,K=y.velocity,M=y.angularVelocity;y.force,y.torque;var E=x.velocity,z=x.angularVelocity;x.force,x.torque;var k=u,N=this.jacobianElementA,W=this.jacobianElementB,Z=this.ni;w.cross(Z,P),R.cross(Z,F),Z.negate(N.spatial),P.negate(N.rotational),W.spatial.copy(Z),W.rotational.copy(F),k.copy(x.position),k.vadd(R,k),k.vsub(y.position,k),k.vsub(w,k);var O=Z.dot(k),I=this.restitution+1,j=I*E.dot(Z)-I*K.dot(Z)+z.dot(F)-M.dot(P),Y=this.computeGiMf(),L=-O*m-j*_-p*Y;return L};var c=new a,d=new a,f=new a,v=new a,g=new a;o.prototype.getImpactVelocityAlongNormal=function(){var p=c,m=d,_=f,y=v,x=g;return this.bi.position.vadd(this.ri,_),this.bj.position.vadd(this.rj,y),this.bi.getVelocityAtWorldPoint(_,p),this.bj.getVelocityAtWorldPoint(y,m),p.vsub(m,x),this.ni.dot(x)}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],20:[function(t,n,r){n.exports=o;var s=t("../math/JacobianElement"),a=t("../math/Vec3");function o(g,p,m,_){this.id=o.id++,this.minForce=typeof m>"u"?-1e6:m,this.maxForce=typeof _>"u"?1e6:_,this.bi=g,this.bj=p,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new s,this.jacobianElementB=new s,this.enabled=!0,this.setSpookParams(1e7,4,1/60)}o.prototype.constructor=o,o.id=0,o.prototype.setSpookParams=function(g,p,m){var _=p,y=g,x=m;this.a=4/(x*(1+4*_)),this.b=4*_/(1+4*_),this.eps=4/(x*x*y*(1+4*_))},o.prototype.computeB=function(g,p,m){var _=this.computeGW(),y=this.computeGq(),x=this.computeGiMf();return-y*g-_*p-x*m},o.prototype.computeGq=function(){var g=this.jacobianElementA,p=this.jacobianElementB,m=this.bi,_=this.bj,y=m.position,x=_.position;return g.spatial.dot(y)+p.spatial.dot(x)};var l=new a;o.prototype.computeGW=function(){var g=this.jacobianElementA,p=this.jacobianElementB,m=this.bi,_=this.bj,y=m.velocity,x=_.velocity,w=m.angularVelocity||l,R=_.angularVelocity||l;return g.multiplyVectors(y,w)+p.multiplyVectors(x,R)},o.prototype.computeGWlambda=function(){var g=this.jacobianElementA,p=this.jacobianElementB,m=this.bi,_=this.bj,y=m.vlambda,x=_.vlambda,w=m.wlambda||l,R=_.wlambda||l;return g.multiplyVectors(y,w)+p.multiplyVectors(x,R)};var h=new a,u=new a,c=new a,d=new a;o.prototype.computeGiMf=function(){var g=this.jacobianElementA,p=this.jacobianElementB,m=this.bi,_=this.bj,y=m.force,x=m.torque,w=_.force,R=_.torque,P=m.invMassSolve,F=_.invMassSolve;return m.invInertiaWorldSolve?m.invInertiaWorldSolve.vmult(x,c):c.set(0,0,0),_.invInertiaWorldSolve?_.invInertiaWorldSolve.vmult(R,d):d.set(0,0,0),y.mult(P,h),w.mult(F,u),g.multiplyVectors(h,c)+p.multiplyVectors(u,d)};var f=new a;o.prototype.computeGiMGt=function(){var g=this.jacobianElementA,p=this.jacobianElementB,m=this.bi,_=this.bj,y=m.invMassSolve,x=_.invMassSolve,w=m.invInertiaWorldSolve,R=_.invInertiaWorldSolve,P=y+x;return w&&(w.vmult(g.rotational,f),P+=f.dot(g.rotational)),R&&(R.vmult(p.rotational,f),P+=f.dot(p.rotational)),P};var v=new a;new a,new a,new a,new a,new a,o.prototype.addToWlambda=function(g){var p=this.jacobianElementA,m=this.jacobianElementB,_=this.bi,y=this.bj,x=v;p.spatial.mult(_.invMassSolve*g,x),_.vlambda.vadd(x,_.vlambda),m.spatial.mult(y.invMassSolve*g,x),y.vlambda.vadd(x,y.vlambda),_.invInertiaWorldSolve&&(_.invInertiaWorldSolve.vmult(p.rotational,x),x.mult(g,x),_.wlambda.vadd(x,_.wlambda)),y.invInertiaWorldSolve&&(y.invInertiaWorldSolve.vmult(m.rotational,x),x.mult(g,x),y.wlambda.vadd(x,y.wlambda))},o.prototype.computeC=function(){return this.computeGiMGt()+this.eps}},{"../math/JacobianElement":26,"../math/Vec3":30}],21:[function(t,n,r){n.exports=o;var s=t("./Equation"),a=t("../math/Vec3");t("../math/Mat3");function o(u,c,d){s.call(this,u,c,-d,d),this.ri=new a,this.rj=new a,this.t=new a}o.prototype=new s,o.prototype.constructor=o;var l=new a,h=new a;o.prototype.computeB=function(u){this.a;var c=this.b;this.bi,this.bj;var d=this.ri,f=this.rj,v=l,g=h,p=this.t;d.cross(p,v),f.cross(p,g);var m=this.jacobianElementA,_=this.jacobianElementB;p.negate(m.spatial),v.negate(m.rotational),_.spatial.copy(p),_.rotational.copy(g);var y=this.computeGW(),x=this.computeGiMf(),w=-y*c-u*x;return w}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],22:[function(t,n,r){n.exports=o;var s=t("../math/Vec3");t("../math/Mat3");var a=t("./Equation");function o(u,c,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6;a.call(this,u,c,-f,f),this.axisA=d.axisA?d.axisA.clone():new s(1,0,0),this.axisB=d.axisB?d.axisB.clone():new s(0,1,0),this.maxAngle=Math.PI/2}o.prototype=new a,o.prototype.constructor=o;var l=new s,h=new s;o.prototype.computeB=function(u){var c=this.a,d=this.b,f=this.axisA,v=this.axisB,g=l,p=h,m=this.jacobianElementA,_=this.jacobianElementB;f.cross(v,g),v.cross(f,p),m.rotational.copy(p),_.rotational.copy(g);var y=Math.cos(this.maxAngle)-f.dot(v),x=this.computeGW(),w=this.computeGiMf(),R=-y*c-x*d-u*w;return R}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],23:[function(t,n,r){n.exports=o;var s=t("../math/Vec3");t("../math/Mat3");var a=t("./Equation");function o(l,h,u){u=typeof u<"u"?u:1e6,a.call(this,l,h,-u,u),this.axisA=new s,this.axisB=new s,this.targetVelocity=0}o.prototype=new a,o.prototype.constructor=o,o.prototype.computeB=function(l){this.a;var h=this.b;this.bi,this.bj;var u=this.axisA,c=this.axisB,d=this.jacobianElementA,f=this.jacobianElementB;d.rotational.copy(u),c.negate(f.rotational);var v=this.computeGW()-this.targetVelocity,g=this.computeGiMf(),p=-v*h-l*g;return p}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],24:[function(t,n,r){var s=t("../utils/Utils");n.exports=a;function a(o,l,h){h=s.defaults(h,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=a.idCounter++,this.materials=[o,l],this.friction=h.friction,this.restitution=h.restitution,this.contactEquationStiffness=h.contactEquationStiffness,this.contactEquationRelaxation=h.contactEquationRelaxation,this.frictionEquationStiffness=h.frictionEquationStiffness,this.frictionEquationRelaxation=h.frictionEquationRelaxation}a.idCounter=0},{"../utils/Utils":53}],25:[function(t,n,r){n.exports=s;function s(a){var o="";a=a||{},typeof a=="string"?(o=a,a={}):typeof a=="object"&&(o=""),this.name=o,this.id=s.idCounter++,this.friction=typeof a.friction<"u"?a.friction:-1,this.restitution=typeof a.restitution<"u"?a.restitution:-1}s.idCounter=0},{}],26:[function(t,n,r){n.exports=a;var s=t("./Vec3");function a(){this.spatial=new s,this.rotational=new s}a.prototype.multiplyElement=function(o){return o.spatial.dot(this.spatial)+o.rotational.dot(this.rotational)},a.prototype.multiplyVectors=function(o,l){return o.dot(this.spatial)+l.dot(this.rotational)}},{"./Vec3":30}],27:[function(t,n,r){n.exports=a;var s=t("./Vec3");function a(o){o?this.elements=o:this.elements=[0,0,0,0,0,0,0,0,0]}a.prototype.identity=function(){var o=this.elements;o[0]=1,o[1]=0,o[2]=0,o[3]=0,o[4]=1,o[5]=0,o[6]=0,o[7]=0,o[8]=1},a.prototype.setZero=function(){var o=this.elements;o[0]=0,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=0,o[6]=0,o[7]=0,o[8]=0},a.prototype.setTrace=function(o){var l=this.elements;l[0]=o.x,l[4]=o.y,l[8]=o.z},a.prototype.getTrace=function(l){var l=l||new s,h=this.elements;l.x=h[0],l.y=h[4],l.z=h[8]},a.prototype.vmult=function(o,l){l=l||new s;var h=this.elements,u=o.x,c=o.y,d=o.z;return l.x=h[0]*u+h[1]*c+h[2]*d,l.y=h[3]*u+h[4]*c+h[5]*d,l.z=h[6]*u+h[7]*c+h[8]*d,l},a.prototype.smult=function(o){for(var l=0;l<this.elements.length;l++)this.elements[l]*=o},a.prototype.mmult=function(o,l){for(var h=l||new a,u=0;u<3;u++)for(var c=0;c<3;c++){for(var d=0,f=0;f<3;f++)d+=o.elements[u+f*3]*this.elements[f+c*3];h.elements[u+c*3]=d}return h},a.prototype.scale=function(o,l){l=l||new a;for(var h=this.elements,u=l.elements,c=0;c!==3;c++)u[3*c+0]=o.x*h[3*c+0],u[3*c+1]=o.y*h[3*c+1],u[3*c+2]=o.z*h[3*c+2];return l},a.prototype.solve=function(o,l){l=l||new s;for(var h=3,u=4,c=[],d=0;d<h*u;d++)c.push(0);var d,f;for(d=0;d<3;d++)for(f=0;f<3;f++)c[d+u*f]=this.elements[d+3*f];c[3+4*0]=o.x,c[3+4*1]=o.y,c[3+4*2]=o.z;var v=3,g=v,p,m=4,_;do{if(d=g-v,c[d+u*d]===0){for(f=d+1;f<g;f++)if(c[d+u*f]!==0){p=m;do _=m-p,c[_+u*d]+=c[_+u*f];while(--p);break}}if(c[d+u*d]!==0)for(f=d+1;f<g;f++){var y=c[d+u*f]/c[d+u*d];p=m;do _=m-p,c[_+u*f]=_<=d?0:c[_+u*f]-c[_+u*d]*y;while(--p)}}while(--v);if(l.z=c[2*u+3]/c[2*u+2],l.y=(c[1*u+3]-c[1*u+2]*l.z)/c[1*u+1],l.x=(c[0*u+3]-c[0*u+2]*l.z-c[0*u+1]*l.y)/c[0*u+0],isNaN(l.x)||isNaN(l.y)||isNaN(l.z)||l.x===1/0||l.y===1/0||l.z===1/0)throw"Could not solve equation! Got x=["+l.toString()+"], b=["+o.toString()+"], A=["+this.toString()+"]";return l},a.prototype.e=function(o,l,h){if(h===void 0)return this.elements[l+3*o];this.elements[l+3*o]=h},a.prototype.copy=function(o){for(var l=0;l<o.elements.length;l++)this.elements[l]=o.elements[l];return this},a.prototype.toString=function(){for(var o="",l=",",h=0;h<9;h++)o+=this.elements[h]+l;return o},a.prototype.reverse=function(o){o=o||new a;for(var l=3,h=6,u=[],c=0;c<l*h;c++)u.push(0);var c,d;for(c=0;c<3;c++)for(d=0;d<3;d++)u[c+h*d]=this.elements[c+3*d];u[3+6*0]=1,u[3+6*1]=0,u[3+6*2]=0,u[4+6*0]=0,u[4+6*1]=1,u[4+6*2]=0,u[5+6*0]=0,u[5+6*1]=0,u[5+6*2]=1;var f=3,v=f,g,p=h,m;do{if(c=v-f,u[c+h*c]===0){for(d=c+1;d<v;d++)if(u[c+h*d]!==0){g=p;do m=p-g,u[m+h*c]+=u[m+h*d];while(--g);break}}if(u[c+h*c]!==0)for(d=c+1;d<v;d++){var _=u[c+h*d]/u[c+h*c];g=p;do m=p-g,u[m+h*d]=m<=c?0:u[m+h*d]-u[m+h*c]*_;while(--g)}}while(--f);c=2;do{d=c-1;do{var _=u[c+h*d]/u[c+h*c];g=h;do m=h-g,u[m+h*d]=u[m+h*d]-u[m+h*c]*_;while(--g)}while(d--)}while(--c);c=2;do{var _=1/u[c+h*c];g=h;do m=h-g,u[m+h*c]=u[m+h*c]*_;while(--g)}while(c--);c=2;do{d=2;do{if(m=u[l+d+h*c],isNaN(m)||m===1/0)throw"Could not reverse! A=["+this.toString()+"]";o.e(c,d,m)}while(d--)}while(c--);return o},a.prototype.setRotationFromQuaternion=function(o){var l=o.x,h=o.y,u=o.z,c=o.w,d=l+l,f=h+h,v=u+u,g=l*d,p=l*f,m=l*v,_=h*f,y=h*v,x=u*v,w=c*d,R=c*f,P=c*v,F=this.elements;return F[3*0+0]=1-(_+x),F[3*0+1]=p-P,F[3*0+2]=m+R,F[3*1+0]=p+P,F[3*1+1]=1-(g+x),F[3*1+2]=y-w,F[3*2+0]=m-R,F[3*2+1]=y+w,F[3*2+2]=1-(g+_),this},a.prototype.transpose=function(o){o=o||new a;for(var l=o.elements,h=this.elements,u=0;u!==3;u++)for(var c=0;c!==3;c++)l[3*u+c]=h[3*c+u];return o}},{"./Vec3":30}],28:[function(t,n,r){n.exports=a;var s=t("./Vec3");function a(d,f,v,g){this.x=d!==void 0?d:0,this.y=f!==void 0?f:0,this.z=v!==void 0?v:0,this.w=g!==void 0?g:1}a.prototype.set=function(d,f,v,g){this.x=d,this.y=f,this.z=v,this.w=g},a.prototype.toString=function(){return this.x+","+this.y+","+this.z+","+this.w},a.prototype.toArray=function(){return[this.x,this.y,this.z,this.w]},a.prototype.setFromAxisAngle=function(d,f){var v=Math.sin(f*.5);this.x=d.x*v,this.y=d.y*v,this.z=d.z*v,this.w=Math.cos(f*.5)},a.prototype.toAxisAngle=function(d){d=d||new s,this.normalize();var f=2*Math.acos(this.w),v=Math.sqrt(1-this.w*this.w);return v<.001?(d.x=this.x,d.y=this.y,d.z=this.z):(d.x=this.x/v,d.y=this.y/v,d.z=this.z/v),[d,f]};var o=new s,l=new s;a.prototype.setFromVectors=function(d,f){if(d.isAntiparallelTo(f)){var v=o,g=l;d.tangents(v,g),this.setFromAxisAngle(v,Math.PI)}else{var p=d.cross(f);this.x=p.x,this.y=p.y,this.z=p.z,this.w=Math.sqrt(Math.pow(d.norm(),2)*Math.pow(f.norm(),2))+d.dot(f),this.normalize()}};var h=new s,u=new s,c=new s;a.prototype.mult=function(d,f){f=f||new a;var v=this.w,g=h,p=u,m=c;return g.set(this.x,this.y,this.z),p.set(d.x,d.y,d.z),f.w=v*d.w-g.dot(p),g.cross(p,m),f.x=v*p.x+d.w*g.x+m.x,f.y=v*p.y+d.w*g.y+m.y,f.z=v*p.z+d.w*g.z+m.z,f},a.prototype.inverse=function(d){var f=this.x,v=this.y,g=this.z,p=this.w;d=d||new a,this.conjugate(d);var m=1/(f*f+v*v+g*g+p*p);return d.x*=m,d.y*=m,d.z*=m,d.w*=m,d},a.prototype.conjugate=function(d){return d=d||new a,d.x=-this.x,d.y=-this.y,d.z=-this.z,d.w=this.w,d},a.prototype.normalize=function(){var d=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);d===0?(this.x=0,this.y=0,this.z=0,this.w=0):(d=1/d,this.x*=d,this.y*=d,this.z*=d,this.w*=d)},a.prototype.normalizeFast=function(){var d=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;d===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=d,this.y*=d,this.z*=d,this.w*=d)},a.prototype.vmult=function(d,f){f=f||new s;var v=d.x,g=d.y,p=d.z,m=this.x,_=this.y,y=this.z,x=this.w,w=x*v+_*p-y*g,R=x*g+y*v-m*p,P=x*p+m*g-_*v,F=-m*v-_*g-y*p;return f.x=w*x+F*-m+R*-y-P*-_,f.y=R*x+F*-_+P*-m-w*-y,f.z=P*x+F*-y+w*-_-R*-m,f},a.prototype.copy=function(d){return this.x=d.x,this.y=d.y,this.z=d.z,this.w=d.w,this},a.prototype.toEuler=function(d,f){f=f||"YZX";var v,g,p,m=this.x,_=this.y,y=this.z,x=this.w;switch(f){case"YZX":var w=m*_+y*x;if(w>.499&&(v=2*Math.atan2(m,x),g=Math.PI/2,p=0),w<-.499&&(v=-2*Math.atan2(m,x),g=-Math.PI/2,p=0),isNaN(v)){var R=m*m,P=_*_,F=y*y;v=Math.atan2(2*_*x-2*m*y,1-2*P-2*F),g=Math.asin(2*w),p=Math.atan2(2*m*x-2*_*y,1-2*R-2*F)}break;default:throw new Error("Euler order "+f+" not supported yet.")}d.y=v,d.z=g,d.x=p},a.prototype.setFromEuler=function(d,f,v,g){g=g||"XYZ";var p=Math.cos(d/2),m=Math.cos(f/2),_=Math.cos(v/2),y=Math.sin(d/2),x=Math.sin(f/2),w=Math.sin(v/2);return g==="XYZ"?(this.x=y*m*_+p*x*w,this.y=p*x*_-y*m*w,this.z=p*m*w+y*x*_,this.w=p*m*_-y*x*w):g==="YXZ"?(this.x=y*m*_+p*x*w,this.y=p*x*_-y*m*w,this.z=p*m*w-y*x*_,this.w=p*m*_+y*x*w):g==="ZXY"?(this.x=y*m*_-p*x*w,this.y=p*x*_+y*m*w,this.z=p*m*w+y*x*_,this.w=p*m*_-y*x*w):g==="ZYX"?(this.x=y*m*_-p*x*w,this.y=p*x*_+y*m*w,this.z=p*m*w-y*x*_,this.w=p*m*_+y*x*w):g==="YZX"?(this.x=y*m*_+p*x*w,this.y=p*x*_+y*m*w,this.z=p*m*w-y*x*_,this.w=p*m*_-y*x*w):g==="XZY"&&(this.x=y*m*_-p*x*w,this.y=p*x*_-y*m*w,this.z=p*m*w+y*x*_,this.w=p*m*_+y*x*w),this},a.prototype.clone=function(){return new a(this.x,this.y,this.z,this.w)}},{"./Vec3":30}],29:[function(t,n,r){var s=t("./Vec3"),a=t("./Quaternion");n.exports=o;function o(h){h=h||{},this.position=new s,h.position&&this.position.copy(h.position),this.quaternion=new a,h.quaternion&&this.quaternion.copy(h.quaternion)}var l=new a;o.pointToLocalFrame=function(h,u,c,f){var f=f||new s;return c.vsub(h,f),u.conjugate(l),l.vmult(f,f),f},o.prototype.pointToLocal=function(h,u){return o.pointToLocalFrame(this.position,this.quaternion,h,u)},o.pointToWorldFrame=function(h,u,c,f){var f=f||new s;return u.vmult(c,f),f.vadd(h,f),f},o.prototype.pointToWorld=function(h,u){return o.pointToWorldFrame(this.position,this.quaternion,h,u)},o.prototype.vectorToWorldFrame=function(h,c){var c=c||new s;return this.quaternion.vmult(h,c),c},o.vectorToWorldFrame=function(h,u,c){return h.vmult(u,c),c},o.vectorToLocalFrame=function(h,u,c,f){var f=f||new s;return u.w*=-1,u.vmult(c,f),u.w*=-1,f}},{"./Quaternion":28,"./Vec3":30}],30:[function(t,n,r){n.exports=a;var s=t("./Mat3");function a(u,c,d){this.x=u||0,this.y=c||0,this.z=d||0}a.ZERO=new a(0,0,0),a.UNIT_X=new a(1,0,0),a.UNIT_Y=new a(0,1,0),a.UNIT_Z=new a(0,0,1),a.prototype.cross=function(u,c){var d=u.x,f=u.y,v=u.z,g=this.x,p=this.y,m=this.z;return c=c||new a,c.x=p*v-m*f,c.y=m*d-g*v,c.z=g*f-p*d,c},a.prototype.set=function(u,c,d){return this.x=u,this.y=c,this.z=d,this},a.prototype.setZero=function(){this.x=this.y=this.z=0},a.prototype.vadd=function(u,c){if(c)c.x=u.x+this.x,c.y=u.y+this.y,c.z=u.z+this.z;else return new a(this.x+u.x,this.y+u.y,this.z+u.z)},a.prototype.vsub=function(u,c){if(c)c.x=this.x-u.x,c.y=this.y-u.y,c.z=this.z-u.z;else return new a(this.x-u.x,this.y-u.y,this.z-u.z)},a.prototype.crossmat=function(){return new s([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])},a.prototype.normalize=function(){var u=this.x,c=this.y,d=this.z,f=Math.sqrt(u*u+c*c+d*d);if(f>0){var v=1/f;this.x*=v,this.y*=v,this.z*=v}else this.x=0,this.y=0,this.z=0;return f},a.prototype.unit=function(u){u=u||new a;var c=this.x,d=this.y,f=this.z,v=Math.sqrt(c*c+d*d+f*f);return v>0?(v=1/v,u.x=c*v,u.y=d*v,u.z=f*v):(u.x=1,u.y=0,u.z=0),u},a.prototype.norm=function(){var u=this.x,c=this.y,d=this.z;return Math.sqrt(u*u+c*c+d*d)},a.prototype.length=a.prototype.norm,a.prototype.norm2=function(){return this.dot(this)},a.prototype.lengthSquared=a.prototype.norm2,a.prototype.distanceTo=function(u){var c=this.x,d=this.y,f=this.z,v=u.x,g=u.y,p=u.z;return Math.sqrt((v-c)*(v-c)+(g-d)*(g-d)+(p-f)*(p-f))},a.prototype.distanceSquared=function(u){var c=this.x,d=this.y,f=this.z,v=u.x,g=u.y,p=u.z;return(v-c)*(v-c)+(g-d)*(g-d)+(p-f)*(p-f)},a.prototype.mult=function(u,c){c=c||new a;var d=this.x,f=this.y,v=this.z;return c.x=u*d,c.y=u*f,c.z=u*v,c},a.prototype.scale=a.prototype.mult,a.prototype.dot=function(u){return this.x*u.x+this.y*u.y+this.z*u.z},a.prototype.isZero=function(){return this.x===0&&this.y===0&&this.z===0},a.prototype.negate=function(u){return u=u||new a,u.x=-this.x,u.y=-this.y,u.z=-this.z,u};var o=new a,l=new a;a.prototype.tangents=function(u,c){var d=this.norm();if(d>0){var f=o,v=1/d;f.set(this.x*v,this.y*v,this.z*v);var g=l;Math.abs(f.x)<.9?(g.set(1,0,0),f.cross(g,u)):(g.set(0,1,0),f.cross(g,u)),f.cross(u,c)}else u.set(1,0,0),c.set(0,1,0)},a.prototype.toString=function(){return this.x+","+this.y+","+this.z},a.prototype.toArray=function(){return[this.x,this.y,this.z]},a.prototype.copy=function(u){return this.x=u.x,this.y=u.y,this.z=u.z,this},a.prototype.lerp=function(u,c,d){var f=this.x,v=this.y,g=this.z;d.x=f+(u.x-f)*c,d.y=v+(u.y-v)*c,d.z=g+(u.z-g)*c},a.prototype.almostEquals=function(u,c){return c===void 0&&(c=1e-6),!(Math.abs(this.x-u.x)>c||Math.abs(this.y-u.y)>c||Math.abs(this.z-u.z)>c)},a.prototype.almostZero=function(u){return u===void 0&&(u=1e-6),!(Math.abs(this.x)>u||Math.abs(this.y)>u||Math.abs(this.z)>u)};var h=new a;a.prototype.isAntiparallelTo=function(u,c){return this.negate(h),h.almostEquals(u,c)},a.prototype.clone=function(){return new a(this.x,this.y,this.z)}},{"./Mat3":27}],31:[function(t,n,r){n.exports=c;var s=t("../utils/EventTarget");t("../shapes/Shape");var a=t("../math/Vec3"),o=t("../math/Mat3"),l=t("../math/Quaternion");t("../material/Material");var h=t("../collision/AABB"),u=t("../shapes/Box");function c(E){E=E||{},s.apply(this),this.id=c.idCounter++,this.world=null,this.preStep=null,this.postStep=null,this.vlambda=new a,this.collisionFilterGroup=typeof E.collisionFilterGroup=="number"?E.collisionFilterGroup:1,this.collisionFilterMask=typeof E.collisionFilterMask=="number"?E.collisionFilterMask:1,this.collisionResponse=!0,this.position=new a,E.position&&this.position.copy(E.position),this.previousPosition=new a,this.initPosition=new a,this.velocity=new a,E.velocity&&this.velocity.copy(E.velocity),this.initVelocity=new a,this.force=new a;var z=typeof E.mass=="number"?E.mass:0;this.mass=z,this.invMass=z>0?1/z:0,this.material=E.material||null,this.linearDamping=typeof E.linearDamping=="number"?E.linearDamping:.01,this.type=z<=0?c.STATIC:c.DYNAMIC,typeof E.type==typeof c.STATIC&&(this.type=E.type),this.allowSleep=typeof E.allowSleep<"u"?E.allowSleep:!0,this.sleepState=0,this.sleepSpeedLimit=typeof E.sleepSpeedLimit<"u"?E.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof E.sleepTimeLimit<"u"?E.sleepTimeLimit:1,this.timeLastSleepy=0,this._wakeUpAfterNarrowphase=!1,this.torque=new a,this.quaternion=new l,E.quaternion&&this.quaternion.copy(E.quaternion),this.initQuaternion=new l,this.angularVelocity=new a,E.angularVelocity&&this.angularVelocity.copy(E.angularVelocity),this.initAngularVelocity=new a,this.interpolatedPosition=new a,this.interpolatedQuaternion=new l,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new a,this.invInertia=new a,this.invInertiaWorld=new o,this.invMassSolve=0,this.invInertiaSolve=new a,this.invInertiaWorldSolve=new o,this.fixedRotation=typeof E.fixedRotation<"u"?E.fixedRotation:!1,this.angularDamping=typeof E.angularDamping<"u"?E.angularDamping:.01,this.aabb=new h,this.aabbNeedsUpdate=!0,this.wlambda=new a,E.shape&&this.addShape(E.shape),this.updateMassProperties()}c.prototype=new s,c.prototype.constructor=c,c.DYNAMIC=1,c.STATIC=2,c.KINEMATIC=4,c.AWAKE=0,c.SLEEPY=1,c.SLEEPING=2,c.idCounter=0,c.prototype.wakeUp=function(){var E=this.sleepState;this.sleepState=0,E===c.SLEEPING&&this.dispatchEvent({type:"wakeup"})},c.prototype.sleep=function(){this.sleepState=c.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0)},c.sleepyEvent={type:"sleepy"},c.sleepEvent={type:"sleep"},c.prototype.sleepTick=function(E){if(this.allowSleep){var z=this.sleepState,k=this.velocity.norm2()+this.angularVelocity.norm2(),N=Math.pow(this.sleepSpeedLimit,2);z===c.AWAKE&&k<N?(this.sleepState=c.SLEEPY,this.timeLastSleepy=E,this.dispatchEvent(c.sleepyEvent)):z===c.SLEEPY&&k>N?this.wakeUp():z===c.SLEEPY&&E-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(c.sleepEvent))}},c.prototype.updateSolveMassProperties=function(){this.sleepState===c.SLEEPING||this.type===c.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))},c.prototype.pointToLocalFrame=function(E,k){var k=k||new a;return E.vsub(this.position,k),this.quaternion.conjugate().vmult(k,k),k},c.prototype.vectorToLocalFrame=function(E,k){var k=k||new a;return this.quaternion.conjugate().vmult(E,k),k},c.prototype.pointToWorldFrame=function(E,k){var k=k||new a;return this.quaternion.vmult(E,k),k.vadd(this.position,k),k},c.prototype.vectorToWorldFrame=function(E,k){var k=k||new a;return this.quaternion.vmult(E,k),k};var d=new a,f=new l;c.prototype.addShape=function(E,z,k){var N=new a,W=new l;return z&&N.copy(z),k&&W.copy(k),this.shapes.push(E),this.shapeOffsets.push(N),this.shapeOrientations.push(W),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,this},c.prototype.updateBoundingRadius=function(){for(var E=this.shapes,z=this.shapeOffsets,k=E.length,N=0,W=0;W!==k;W++){var Z=E[W];Z.updateBoundingSphereRadius();var O=z[W].norm(),I=Z.boundingSphereRadius;O+I>N&&(N=O+I)}this.boundingRadius=N};var v=new h;c.prototype.computeAABB=function(){for(var E=this.shapes,z=this.shapeOffsets,k=this.shapeOrientations,N=E.length,W=d,Z=f,O=this.quaternion,I=this.aabb,j=v,Y=0;Y!==N;Y++){var L=E[Y];k[Y].mult(O,Z),Z.vmult(z[Y],W),W.vadd(this.position,W),L.calculateWorldAABB(W,Z,j.lowerBound,j.upperBound),Y===0?I.copy(j):I.extend(j)}this.aabbNeedsUpdate=!1};var g=new o,p=new o;new o,c.prototype.updateInertiaWorld=function(E){var z=this.invInertia;if(!(z.x===z.y&&z.y===z.z&&!E)){var k=g,N=p;k.setRotationFromQuaternion(this.quaternion),k.transpose(N),k.scale(z,k),k.mmult(N,this.invInertiaWorld)}};var m=new a,_=new a;c.prototype.applyForce=function(E,z){if(this.type===c.DYNAMIC){var k=m;z.vsub(this.position,k);var N=_;k.cross(E,N),this.force.vadd(E,this.force),this.torque.vadd(N,this.torque)}};var y=new a,x=new a;c.prototype.applyLocalForce=function(E,z){if(this.type===c.DYNAMIC){var k=y,N=x;this.vectorToWorldFrame(E,k),this.pointToWorldFrame(z,N),this.applyForce(k,N)}};var w=new a,R=new a,P=new a;c.prototype.applyImpulse=function(E,z){if(this.type===c.DYNAMIC){var k=w;z.vsub(this.position,k);var N=R;N.copy(E),N.mult(this.invMass,N),this.velocity.vadd(N,this.velocity);var W=P;k.cross(E,W),this.invInertiaWorld.vmult(W,W),this.angularVelocity.vadd(W,this.angularVelocity)}};var F=new a,K=new a;c.prototype.applyLocalImpulse=function(E,z){if(this.type===c.DYNAMIC){var k=F,N=K;this.vectorToWorldFrame(E,k),this.pointToWorldFrame(z,N),this.applyImpulse(k,N)}};var M=new a;c.prototype.updateMassProperties=function(){var E=M;this.invMass=this.mass>0?1/this.mass:0;var z=this.inertia,k=this.fixedRotation;this.computeAABB(),E.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),u.calculateInertia(E,this.mass,z),this.invInertia.set(z.x>0&&!k?1/z.x:0,z.y>0&&!k?1/z.y:0,z.z>0&&!k?1/z.z:0),this.updateInertiaWorld(!0)},c.prototype.getVelocityAtWorldPoint=function(E,z){var k=new a;return E.vsub(this.position,k),this.angularVelocity.cross(k,z),this.velocity.vadd(z,z),z}},{"../collision/AABB":3,"../material/Material":25,"../math/Mat3":27,"../math/Quaternion":28,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Shape":43,"../utils/EventTarget":49}],32:[function(t,n,r){t("./Body");var s=t("../math/Vec3"),a=t("../math/Quaternion");t("../collision/RaycastResult");var o=t("../collision/Ray"),l=t("../objects/WheelInfo");n.exports=h;function h(O){this.chassisBody=O.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof O.indexRightAxis<"u"?O.indexRightAxis:1,this.indexForwardAxis=typeof O.indexForwardAxis<"u"?O.indexForwardAxis:0,this.indexUpAxis=typeof O.indexUpAxis<"u"?O.indexUpAxis:2}new s,new s,new s;var u=new s,c=new s,d=new s;new o,h.prototype.addWheel=function(O){O=O||{};var I=new l(O),j=this.wheelInfos.length;return this.wheelInfos.push(I),j},h.prototype.setSteeringValue=function(O,I){var j=this.wheelInfos[I];j.steering=O},new s,h.prototype.applyEngineForce=function(O,I){this.wheelInfos[I].engineForce=O},h.prototype.setBrake=function(O,I){this.wheelInfos[I].brake=O},h.prototype.addToWorld=function(O){this.constraints,O.add(this.chassisBody);var I=this;this.preStepCallback=function(){I.updateVehicle(O.dt)},O.addEventListener("preStep",this.preStepCallback),this.world=O},h.prototype.getVehicleAxisWorld=function(O,I){I.set(O===0?1:0,O===1?1:0,O===2?1:0),this.chassisBody.vectorToWorldFrame(I,I)},h.prototype.updateVehicle=function(O){for(var I=this.wheelInfos,j=I.length,Y=this.chassisBody,L=0;L<j;L++)this.updateWheelTransform(L);this.currentVehicleSpeedKmHour=3.6*Y.velocity.norm();var q=new s;this.getVehicleAxisWorld(this.indexForwardAxis,q),q.dot(Y.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(var L=0;L<j;L++)this.castRay(I[L]);this.updateSuspension(O);for(var U=new s,b=new s,L=0;L<j;L++){var A=I[L],G=A.suspensionForce;G>A.maxSuspensionForce&&(G=A.maxSuspensionForce),A.raycastResult.hitNormalWorld.scale(G*O,U),A.raycastResult.hitPointWorld.vsub(Y.position,b),Y.applyImpulse(U,A.raycastResult.hitPointWorld)}this.updateFriction(O);var ie=new s,te=new s,X=new s;for(L=0;L<j;L++){var A=I[L];Y.getVelocityAtWorldPoint(A.chassisConnectionPointWorld,X);var se=1;switch(this.indexUpAxis){case 1:se=-1;break}if(A.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,te);var ce=te.dot(A.raycastResult.hitNormalWorld);A.raycastResult.hitNormalWorld.scale(ce,ie),te.vsub(ie,te);var H=te.dot(X);A.deltaRotation=se*H*O/A.radius}(A.sliding||!A.isInContact)&&A.engineForce!==0&&A.useCustomSlidingRotationalSpeed&&(A.deltaRotation=(A.engineForce>0?1:-1)*A.customSlidingRotationalSpeed*O),Math.abs(A.brake)>Math.abs(A.engineForce)&&(A.deltaRotation=0),A.rotation+=A.deltaRotation,A.deltaRotation*=.99}},h.prototype.updateSuspension=function(O){for(var I=this.chassisBody,j=I.mass,Y=this.wheelInfos,L=Y.length,q=0;q<L;q++){var U=Y[q];if(U.isInContact){var b,A=U.suspensionRestLength,G=U.suspensionLength,ie=A-G;b=U.suspensionStiffness*ie*U.clippedInvContactDotSuspension;var te=U.suspensionRelativeVelocity,X;te<0?X=U.dampingCompression:X=U.dampingRelaxation,b-=X*te,U.suspensionForce=b*j,U.suspensionForce<0&&(U.suspensionForce=0)}else U.suspensionForce=0}},h.prototype.removeFromWorld=function(O){this.constraints,O.remove(this.chassisBody),O.removeEventListener("preStep",this.preStepCallback),this.world=null};var f=new s,v=new s;h.prototype.castRay=function(O){var I=f,j=v;this.updateWheelTransformWorld(O);var Y=this.chassisBody,L=-1,q=O.suspensionRestLength+O.radius;O.directionWorld.scale(q,I);var U=O.chassisConnectionPointWorld;U.vadd(I,j);var b=O.raycastResult;b.reset();var A=Y.collisionResponse;Y.collisionResponse=!1,this.world.rayTest(U,j,b),Y.collisionResponse=A;var G=b.body;if(O.raycastResult.groundObject=0,G){L=b.distance,O.raycastResult.hitNormalWorld=b.hitNormalWorld,O.isInContact=!0;var ie=b.distance;O.suspensionLength=ie-O.radius;var te=O.suspensionRestLength-O.maxSuspensionTravel,X=O.suspensionRestLength+O.maxSuspensionTravel;O.suspensionLength<te&&(O.suspensionLength=te),O.suspensionLength>X&&(O.suspensionLength=X,O.raycastResult.reset());var se=O.raycastResult.hitNormalWorld.dot(O.directionWorld),ce=new s;Y.getVelocityAtWorldPoint(O.raycastResult.hitPointWorld,ce);var H=O.raycastResult.hitNormalWorld.dot(ce);if(se>=-.1)O.suspensionRelativeVelocity=0,O.clippedInvContactDotSuspension=1/.1;else{var Ae=-1/se;O.suspensionRelativeVelocity=H*Ae,O.clippedInvContactDotSuspension=Ae}}else O.suspensionLength=O.suspensionRestLength+0*O.maxSuspensionTravel,O.suspensionRelativeVelocity=0,O.directionWorld.scale(-1,O.raycastResult.hitNormalWorld),O.clippedInvContactDotSuspension=1;return L},h.prototype.updateWheelTransformWorld=function(O){O.isInContact=!1;var I=this.chassisBody;I.pointToWorldFrame(O.chassisConnectionPointLocal,O.chassisConnectionPointWorld),I.vectorToWorldFrame(O.directionLocal,O.directionWorld),I.vectorToWorldFrame(O.axleLocal,O.axleWorld)},h.prototype.updateWheelTransform=function(O){var I=u,j=c,Y=d,L=this.wheelInfos[O];this.updateWheelTransformWorld(L),L.directionLocal.scale(-1,I),j.copy(L.axleLocal),I.cross(j,Y),Y.normalize(),j.normalize();var q=L.steering,U=new a;U.setFromAxisAngle(I,q);var b=new a;b.setFromAxisAngle(j,L.rotation);var A=L.worldTransform.quaternion;this.chassisBody.quaternion.mult(U,A),A.mult(b,A),A.normalize();var G=L.worldTransform.position;G.copy(L.directionWorld),G.scale(L.suspensionLength,G),G.vadd(L.chassisConnectionPointWorld,G)};var g=[new s(1,0,0),new s(0,1,0),new s(0,0,1)];h.prototype.getWheelTransformWorld=function(O){return this.wheelInfos[O].worldTransform};var p=new s,m=[],_=[],y=1;h.prototype.updateFriction=function(O){for(var I=p,j=this.wheelInfos,Y=j.length,L=this.chassisBody,q=_,U=m,b=0;b<Y;b++){var A=j[b],G=A.raycastResult.body;A.sideImpulse=0,A.forwardImpulse=0,q[b]||(q[b]=new s),U[b]||(U[b]=new s)}for(var b=0;b<Y;b++){var A=j[b],G=A.raycastResult.body;if(G){var ie=U[b],te=this.getWheelTransformWorld(b);te.vectorToWorldFrame(g[this.indexRightAxis],ie);var X=A.raycastResult.hitNormalWorld,se=ie.dot(X);X.scale(se,I),ie.vsub(I,ie),ie.normalize(),X.cross(ie,q[b]),q[b].normalize(),A.sideImpulse=Z(L,A.raycastResult.hitPointWorld,G,A.raycastResult.hitPointWorld,ie),A.sideImpulse*=y}}var ce=1,H=.5;this.sliding=!1;for(var b=0;b<Y;b++){var A=j[b],G=A.raycastResult.body,Ae=0;if(A.slipInfo=1,G){var ue=0,re=A.brake?A.brake:ue;Ae=P(L,G,A.raycastResult.hitPointWorld,q[b],re),Ae+=A.engineForce*O;var ae=re/Ae;A.slipInfo*=ae}if(A.forwardImpulse=0,A.skidInfo=1,G){A.skidInfo=1;var We=A.suspensionForce*O*A.frictionSlip,be=We,C=We*be;A.forwardImpulse=Ae;var S=A.forwardImpulse*H,ee=A.sideImpulse*ce,de=S*S+ee*ee;if(A.sliding=!1,de>C){this.sliding=!0,A.sliding=!0;var ae=We/Math.sqrt(de);A.skidInfo*=ae}}}if(this.sliding)for(var b=0;b<Y;b++){var A=j[b];A.sideImpulse!==0&&A.skidInfo<1&&(A.forwardImpulse*=A.skidInfo,A.sideImpulse*=A.skidInfo)}for(var b=0;b<Y;b++){var A=j[b],he=new s;if(he.copy(A.raycastResult.hitPointWorld),A.forwardImpulse!==0){var pe=new s;q[b].scale(A.forwardImpulse,pe),L.applyImpulse(pe,he)}if(A.sideImpulse!==0){var G=A.raycastResult.body,Me=new s;Me.copy(A.raycastResult.hitPointWorld);var xe=new s;U[b].scale(A.sideImpulse,xe),L.pointToLocalFrame(he,he),he["xyz"[this.indexUpAxis]]*=A.rollInfluence,L.pointToWorldFrame(he,he),L.applyImpulse(xe,he),xe.scale(-1,xe),G.applyImpulse(xe,Me)}}};var x=new s,w=new s,R=new s;function P(O,I,j,Y,L){var q=0,U=j,b=x,A=w,G=R;O.getVelocityAtWorldPoint(U,b),I.getVelocityAtWorldPoint(U,A),b.vsub(A,G);var ie=Y.dot(G),te=z(O,j,Y),X=z(I,j,Y),se=1,ce=se/(te+X);return q=-ie*ce,L<q&&(q=L),q<-L&&(q=-L),q}var F=new s,K=new s,M=new s,E=new s;function z(O,I,j){var Y=F,L=K,q=M,U=E;return I.vsub(O.position,Y),Y.cross(j,L),O.invInertiaWorld.vmult(L,U),U.cross(Y,q),O.invMass+j.dot(q)}var k=new s,N=new s,W=new s;function Z(O,I,j,Y,L,se){var U=L.norm2();if(U>1.1)return 0;var b=k,A=N,G=W;O.getVelocityAtWorldPoint(I,b),j.getVelocityAtWorldPoint(Y,A),b.vsub(A,G);var ie=L.dot(G),te=.2,X=1/(O.invMass+j.invMass),se=-te*ie*X;return se}},{"../collision/Ray":9,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Vec3":30,"../objects/WheelInfo":36,"./Body":31}],33:[function(t,n,r){var s=t("./Body"),a=t("../shapes/Sphere"),o=t("../shapes/Box"),l=t("../math/Vec3"),h=t("../constraints/HingeConstraint");n.exports=u;function u(f){if(this.wheelBodies=[],this.coordinateSystem=typeof f.coordinateSystem>"u"?new l(1,2,3):f.coordinateSystem.clone(),this.chassisBody=f.chassisBody,!this.chassisBody){var v=new o(new l(5,2,.5));this.chassisBody=new s(1,v)}this.constraints=[],this.wheelAxes=[],this.wheelForces=[]}u.prototype.addWheel=function(f){f=f||{};var v=f.body;v||(v=new s(1,new a(1.2))),this.wheelBodies.push(v),this.wheelForces.push(0),new l;var g=typeof f.position<"u"?f.position.clone():new l,p=new l;this.chassisBody.pointToWorldFrame(g,p),v.position.set(p.x,p.y,p.z);var m=typeof f.axis<"u"?f.axis.clone():new l(0,1,0);this.wheelAxes.push(m);var _=new h(this.chassisBody,v,{pivotA:g,axisA:m,pivotB:l.ZERO,axisB:m,collideConnected:!1});return this.constraints.push(_),this.wheelBodies.length-1},u.prototype.setSteeringValue=function(f,v){var g=this.wheelAxes[v],p=Math.cos(f),m=Math.sin(f),_=g.x,y=g.y;this.constraints[v].axisA.set(p*_-m*y,m*_+p*y,0)},u.prototype.setMotorSpeed=function(f,v){var g=this.constraints[v];g.enableMotor(),g.motorTargetVelocity=f},u.prototype.disableMotor=function(f){var v=this.constraints[f];v.disableMotor()};var c=new l;u.prototype.setWheelForce=function(f,v){this.wheelForces[v]=f},u.prototype.applyWheelForce=function(f,v){var g=this.wheelAxes[v],p=this.wheelBodies[v],m=p.torque;g.scale(f,c),p.vectorToWorldFrame(c,c),m.vadd(c,m)},u.prototype.addToWorld=function(f){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),p=0;p<g.length;p++)f.add(g[p]);for(var p=0;p<v.length;p++)f.addConstraint(v[p]);f.addEventListener("preStep",this._update.bind(this))},u.prototype._update=function(){for(var f=this.wheelForces,v=0;v<f.length;v++)this.applyWheelForce(f[v],v)},u.prototype.removeFromWorld=function(f){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),p=0;p<g.length;p++)f.remove(g[p]);for(var p=0;p<v.length;p++)f.removeConstraint(v[p])};var d=new l;u.prototype.getWheelSpeed=function(f){var v=this.wheelAxes[f],g=this.wheelBodies[f],p=g.angularVelocity;return this.chassisBody.vectorToWorldFrame(v,d),p.dot(d)}},{"../constraints/HingeConstraint":15,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Sphere":44,"./Body":31}],34:[function(t,n,r){n.exports=a,t("../shapes/Shape");var s=t("../math/Vec3");t("../math/Quaternion"),t("../shapes/Particle"),t("../objects/Body"),t("../material/Material");function a(){this.particles=[],this.density=1,this.smoothingRadius=1,this.speedOfSound=1,this.viscosity=.01,this.eps=1e-6,this.pressures=[],this.densities=[],this.neighbors=[]}a.prototype.add=function(v){this.particles.push(v),this.neighbors.length<this.particles.length&&this.neighbors.push([])},a.prototype.remove=function(v){var g=this.particles.indexOf(v);g!==-1&&(this.particles.splice(g,1),this.neighbors.length>this.particles.length&&this.neighbors.pop())};var o=new s;a.prototype.getNeighbors=function(v,g){for(var p=this.particles.length,m=v.id,_=this.smoothingRadius*this.smoothingRadius,y=o,x=0;x!==p;x++){var w=this.particles[x];w.position.vsub(v.position,y),m!==w.id&&y.norm2()<_&&g.push(w)}};var l=new s,h=new s,u=new s,c=new s,d=new s,f=new s;a.prototype.update=function(){for(var v=this.particles.length,g=l,p=this.speedOfSound,m=this.eps,_=0;_!==v;_++){var y=this.particles[_],x=this.neighbors[_];x.length=0,this.getNeighbors(y,x),x.push(this.particles[_]);for(var w=x.length,R=0,P=0;P!==w;P++){y.position.vsub(x[P].position,g);var F=g.norm(),K=this.w(F);R+=x[P].mass*K}this.densities[_]=R,this.pressures[_]=p*p*(this.densities[_]-this.density)}for(var M=h,E=u,z=c,k=d,N=f,_=0;_!==v;_++){var W=this.particles[_];M.set(0,0,0),E.set(0,0,0);for(var Z,O,x=this.neighbors[_],w=x.length,P=0;P!==w;P++){var I=x[P];W.position.vsub(I.position,k);var j=k.norm();Z=-I.mass*(this.pressures[_]/(this.densities[_]*this.densities[_]+m)+this.pressures[P]/(this.densities[P]*this.densities[P]+m)),this.gradw(k,z),z.mult(Z,z),M.vadd(z,M),I.velocity.vsub(W.velocity,N),N.mult(1/(1e-4+this.densities[_]*this.densities[P])*this.viscosity*I.mass,N),O=this.nablaw(j),N.mult(O,N),E.vadd(N,E)}E.mult(W.mass,E),M.mult(W.mass,M),W.force.vadd(E,W.force),W.force.vadd(M,W.force)}},a.prototype.w=function(v){var g=this.smoothingRadius;return 315/(64*Math.PI*Math.pow(g,9))*Math.pow(g*g-v*v,3)},a.prototype.gradw=function(v,g){var p=v.norm(),m=this.smoothingRadius;v.mult(945/(32*Math.PI*Math.pow(m,9))*Math.pow(m*m-p*p,2),g)},a.prototype.nablaw=function(v){var g=this.smoothingRadius,p=945/(32*Math.PI*Math.pow(g,9))*(g*g-v*v)*(7*v*v-3*g*g);return p}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Particle":41,"../shapes/Shape":43}],35:[function(t,n,r){var s=t("../math/Vec3");n.exports=a;function a(_,y,x){x=x||{},this.restLength=typeof x.restLength=="number"?x.restLength:1,this.stiffness=x.stiffness||100,this.damping=x.damping||1,this.bodyA=_,this.bodyB=y,this.localAnchorA=new s,this.localAnchorB=new s,x.localAnchorA&&this.localAnchorA.copy(x.localAnchorA),x.localAnchorB&&this.localAnchorB.copy(x.localAnchorB),x.worldAnchorA&&this.setWorldAnchorA(x.worldAnchorA),x.worldAnchorB&&this.setWorldAnchorB(x.worldAnchorB)}a.prototype.setWorldAnchorA=function(_){this.bodyA.pointToLocalFrame(_,this.localAnchorA)},a.prototype.setWorldAnchorB=function(_){this.bodyB.pointToLocalFrame(_,this.localAnchorB)},a.prototype.getWorldAnchorA=function(_){this.bodyA.pointToWorldFrame(this.localAnchorA,_)},a.prototype.getWorldAnchorB=function(_){this.bodyB.pointToWorldFrame(this.localAnchorB,_)};var o=new s,l=new s,h=new s,u=new s,c=new s,d=new s,f=new s,v=new s,g=new s,p=new s,m=new s;a.prototype.applyForce=function(){var _=this.stiffness,y=this.damping,x=this.restLength,w=this.bodyA,R=this.bodyB,P=o,F=l,K=h,M=u,E=m,z=c,k=d,N=f,W=v,Z=g,O=p;this.getWorldAnchorA(z),this.getWorldAnchorB(k),z.vsub(w.position,N),k.vsub(R.position,W),k.vsub(z,P);var I=P.norm();F.copy(P),F.normalize(),R.velocity.vsub(w.velocity,K),R.angularVelocity.cross(W,E),K.vadd(E,K),w.angularVelocity.cross(N,E),K.vsub(E,K),F.mult(-_*(I-x)-y*K.dot(F),M),w.force.vsub(M,w.force),R.force.vadd(M,R.force),N.cross(M,Z),W.cross(M,O),w.torque.vsub(Z,w.torque),R.torque.vadd(O,R.torque)}},{"../math/Vec3":30}],36:[function(t,n,r){var s=t("../math/Vec3"),a=t("../math/Transform"),o=t("../collision/RaycastResult"),l=t("../utils/Utils");n.exports=h;function h(d){d=l.defaults(d,{chassisConnectionPointLocal:new s,chassisConnectionPointWorld:new s,directionLocal:new s,directionWorld:new s,axleLocal:new s,axleWorld:new s,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:1e4,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=d.maxSuspensionTravel,this.customSlidingRotationalSpeed=d.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=d.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=d.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=d.chassisConnectionPointWorld.clone(),this.directionLocal=d.directionLocal.clone(),this.directionWorld=d.directionWorld.clone(),this.axleLocal=d.axleLocal.clone(),this.axleWorld=d.axleWorld.clone(),this.suspensionRestLength=d.suspensionRestLength,this.suspensionMaxLength=d.suspensionMaxLength,this.radius=d.radius,this.suspensionStiffness=d.suspensionStiffness,this.dampingCompression=d.dampingCompression,this.dampingRelaxation=d.dampingRelaxation,this.frictionSlip=d.frictionSlip,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=d.rollInfluence,this.maxSuspensionForce=d.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=d.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new o,this.worldTransform=new a,this.isInContact=!1}var c=new s,u=new s,c=new s;h.prototype.updateWheel=function(d){var f=this.raycastResult;if(this.isInContact){var v=f.hitNormalWorld.dot(f.directionWorld);f.hitPointWorld.vsub(d.position,u),d.getVelocityAtWorldPoint(u,c);var g=f.hitNormalWorld.dot(c);if(v>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1/.1;else{var p=-1/v;this.suspensionRelativeVelocity=g*p,this.clippedInvContactDotSuspension=p}}else f.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,f.directionWorld.scale(-1,f.hitNormalWorld),this.clippedInvContactDotSuspension=1}},{"../collision/RaycastResult":10,"../math/Transform":29,"../math/Vec3":30,"../utils/Utils":53}],37:[function(t,n,r){n.exports=l;var s=t("./Shape"),a=t("../math/Vec3"),o=t("./ConvexPolyhedron");function l(c){s.call(this),this.type=s.types.BOX,this.halfExtents=c,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}l.prototype=new s,l.prototype.constructor=l,l.prototype.updateConvexPolyhedronRepresentation=function(){var c=this.halfExtents.x,d=this.halfExtents.y,f=this.halfExtents.z,v=a,g=[new v(-c,-d,-f),new v(c,-d,-f),new v(c,d,-f),new v(-c,d,-f),new v(-c,-d,f),new v(c,-d,f),new v(c,d,f),new v(-c,d,f)],p=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]];new v(0,0,1),new v(0,1,0),new v(1,0,0);var m=new o(g,p);this.convexPolyhedronRepresentation=m,m.material=this.material},l.prototype.calculateLocalInertia=function(c,d){return d=d||new a,l.calculateInertia(this.halfExtents,c,d),d},l.calculateInertia=function(c,d,f){var v=c;f.x=1/12*d*(2*v.y*2*v.y+2*v.z*2*v.z),f.y=1/12*d*(2*v.x*2*v.x+2*v.z*2*v.z),f.z=1/12*d*(2*v.y*2*v.y+2*v.x*2*v.x)},l.prototype.getSideNormals=function(c,d){var f=c,v=this.halfExtents;if(f[0].set(v.x,0,0),f[1].set(0,v.y,0),f[2].set(0,0,v.z),f[3].set(-v.x,0,0),f[4].set(0,-v.y,0),f[5].set(0,0,-v.z),d!==void 0)for(var g=0;g!==f.length;g++)d.vmult(f[g],f[g]);return f},l.prototype.volume=function(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z},l.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.halfExtents.norm()};var h=new a;new a,l.prototype.forEachWorldCorner=function(c,d,f){for(var v=this.halfExtents,g=[[v.x,v.y,v.z],[-v.x,v.y,v.z],[-v.x,-v.y,v.z],[-v.x,-v.y,-v.z],[v.x,-v.y,-v.z],[v.x,v.y,-v.z],[-v.x,v.y,-v.z],[v.x,-v.y,v.z]],p=0;p<g.length;p++)h.set(g[p][0],g[p][1],g[p][2]),d.vmult(h,h),c.vadd(h,h),f(h.x,h.y,h.z)};var u=[new a,new a,new a,new a,new a,new a,new a,new a];l.prototype.calculateWorldAABB=function(c,d,f,v){var g=this.halfExtents;u[0].set(g.x,g.y,g.z),u[1].set(-g.x,g.y,g.z),u[2].set(-g.x,-g.y,g.z),u[3].set(-g.x,-g.y,-g.z),u[4].set(g.x,-g.y,-g.z),u[5].set(g.x,g.y,-g.z),u[6].set(-g.x,g.y,-g.z),u[7].set(g.x,-g.y,g.z);var p=u[0];d.vmult(p,p),c.vadd(p,p),v.copy(p),f.copy(p);for(var m=1;m<8;m++){var p=u[m];d.vmult(p,p),c.vadd(p,p);var _=p.x,y=p.y,x=p.z;_>v.x&&(v.x=_),y>v.y&&(v.y=y),x>v.z&&(v.z=x),_<f.x&&(f.x=_),y<f.y&&(f.y=y),x<f.z&&(f.z=x)}}},{"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],38:[function(t,n,r){n.exports=l;var s=t("./Shape"),a=t("../math/Vec3");t("../math/Quaternion");var o=t("../math/Transform");function l(L,q,U){s.call(this),this.type=s.types.CONVEXPOLYHEDRON,this.vertices=L||[],this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.faces=q||[],this.faceNormals=[],this.computeNormals(),this.worldFaceNormalsNeedsUpdate=!0,this.worldFaceNormals=[],this.uniqueEdges=[],this.uniqueAxes=U?U.slice():null,this.computeEdges(),this.updateBoundingSphereRadius()}l.prototype=new s,l.prototype.constructor=l;var h=new a;l.prototype.computeEdges=function(){var L=this.faces,q=this.vertices;q.length;var U=this.uniqueEdges;U.length=0;for(var b=h,A=0;A!==L.length;A++)for(var G=L[A],ie=G.length,te=0;te!==ie;te++){var X=(te+1)%ie;q[G[te]].vsub(q[G[X]],b),b.normalize();for(var se=!1,ce=0;ce!==U.length;ce++)if(U[ce].almostEquals(b)||U[ce].almostEquals(b)){se=!0;break}se||U.push(b.clone())}},l.prototype.computeNormals=function(){this.faceNormals.length=this.faces.length;for(var L=0;L<this.faces.length;L++){for(var q=0;q<this.faces[L].length;q++)if(!this.vertices[this.faces[L][q]])throw new Error("Vertex "+this.faces[L][q]+" not found!");var U=this.faceNormals[L]||new a;this.getFaceNormal(L,U),U.negate(U),this.faceNormals[L]=U;var b=this.vertices[this.faces[L][0]];if(U.dot(b)<0){console.error(".faceNormals["+L+"] = Vec3("+U.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");for(var q=0;q<this.faces[L].length;q++)console.warn(".vertices["+this.faces[L][q]+"] = Vec3("+this.vertices[this.faces[L][q]].toString()+")")}}};var u=new a,c=new a;l.computeNormal=function(L,q,U,b){q.vsub(L,c),U.vsub(q,u),u.cross(c,b),b.isZero()||b.normalize()},l.prototype.getFaceNormal=function(L,q){var U=this.faces[L],b=this.vertices[U[0]],A=this.vertices[U[1]],G=this.vertices[U[2]];return l.computeNormal(b,A,G,q)};var d=new a;l.prototype.clipAgainstHull=function(L,q,U,b,A,G,ie,te,X){for(var se=d,ce=-1,H=-Number.MAX_VALUE,Ae=0;Ae<U.faces.length;Ae++){se.copy(U.faceNormals[Ae]),A.vmult(se,se);var ue=se.dot(G);ue>H&&(H=ue,ce=Ae)}for(var re=[],ae=U.faces[ce],We=ae.length,be=0;be<We;be++){var C=U.vertices[ae[be]],S=new a;S.copy(C),A.vmult(S,S),b.vadd(S,S),re.push(S)}ce>=0&&this.clipFaceAgainstHull(G,L,q,re,ie,te,X)};var f=new a,v=new a,g=new a,p=new a,m=new a,_=new a;l.prototype.findSeparatingAxis=function(L,q,U,b,A,G,ie,te){var X=f,se=v,ce=g,H=p,Ae=m,ue=_,re=Number.MAX_VALUE,ae=this;if(ae.uniqueAxes)for(var be=0;be!==ae.uniqueAxes.length;be++){U.vmult(ae.uniqueAxes[be],X);var S=ae.testSepAxis(X,L,q,U,b,A);if(S===!1)return!1;S<re&&(re=S,G.copy(X))}else for(var We=ie?ie.length:ae.faces.length,be=0;be<We;be++){var C=ie?ie[be]:be;X.copy(ae.faceNormals[C]),U.vmult(X,X);var S=ae.testSepAxis(X,L,q,U,b,A);if(S===!1)return!1;S<re&&(re=S,G.copy(X))}if(L.uniqueAxes)for(var be=0;be!==L.uniqueAxes.length;be++){A.vmult(L.uniqueAxes[be],se);var S=ae.testSepAxis(se,L,q,U,b,A);if(S===!1)return!1;S<re&&(re=S,G.copy(se))}else for(var ee=te?te.length:L.faces.length,be=0;be<ee;be++){var C=te?te[be]:be;se.copy(L.faceNormals[C]),A.vmult(se,se);var S=ae.testSepAxis(se,L,q,U,b,A);if(S===!1)return!1;S<re&&(re=S,G.copy(se))}for(var de=0;de!==ae.uniqueEdges.length;de++){U.vmult(ae.uniqueEdges[de],H);for(var he=0;he!==L.uniqueEdges.length;he++)if(A.vmult(L.uniqueEdges[he],Ae),H.cross(Ae,ue),!ue.almostZero()){ue.normalize();var pe=ae.testSepAxis(ue,L,q,U,b,A);if(pe===!1)return!1;pe<re&&(re=pe,G.copy(ue))}}return b.vsub(q,ce),ce.dot(G)>0&&G.negate(G),!0};var y=[],x=[];l.prototype.testSepAxis=function(L,q,U,b,A,G){var ie=this;l.project(ie,L,U,b,y),l.project(q,L,A,G,x);var te=y[0],X=y[1],se=x[0],ce=x[1],H=te-ce,Ae=se-X,ue=H<Ae?H:Ae;return ue};var w=new a,R=new a;l.prototype.calculateLocalInertia=function(L,q){this.computeLocalAABB(w,R);var U=R.x-w.x,b=R.y-w.y,A=R.z-w.z;q.x=1/12*L*(2*b*2*b+2*A*2*A),q.y=1/12*L*(2*U*2*U+2*A*2*A),q.z=1/12*L*(2*b*2*b+2*U*2*U)},l.prototype.getPlaneConstantOfFace=function(L){var q=this.faces[L],U=this.faceNormals[L],b=this.vertices[q[0]],A=-U.dot(b);return A};var P=new a,F=new a,K=new a,M=new a,E=new a,z=new a,k=new a,N=new a;l.prototype.clipFaceAgainstHull=function(L,q,U,b,A,G,ie){for(var te=P,X=F,se=K,ce=M,H=E,Ae=z,ue=k,re=N,ae=this,We=[],be=b,C=We,S=-1,ee=Number.MAX_VALUE,de=0;de<ae.faces.length;de++){te.copy(ae.faceNormals[de]),U.vmult(te,te);var he=te.dot(L);he<ee&&(ee=he,S=de)}if(!(S<0)){var pe=ae.faces[S];pe.connectedFaces=[];for(var Me=0;Me<ae.faces.length;Me++)for(var xe=0;xe<ae.faces[Me].length;xe++)pe.indexOf(ae.faces[Me][xe])!==-1&&Me!==S&&pe.connectedFaces.indexOf(Me)===-1&&pe.connectedFaces.push(Me);be.length;for(var ye=pe.length,ze=0;ze<ye;ze++){var je=ae.vertices[pe[ze]],ge=ae.vertices[pe[(ze+1)%ye]];je.vsub(ge,X),se.copy(X),U.vmult(se,se),q.vadd(se,se),ce.copy(this.faceNormals[S]),U.vmult(ce,ce),q.vadd(ce,ce),se.cross(ce,H),H.negate(H),Ae.copy(je),U.vmult(Ae,Ae),q.vadd(Ae,Ae),-Ae.dot(H);var qe;{var at=pe.connectedFaces[ze];ue.copy(this.faceNormals[at]);var Qe=this.getPlaneConstantOfFace(at);re.copy(ue),U.vmult(re,re);var qe=Qe-re.dot(q)}for(this.clipFaceAgainstPlane(be,C,re,qe);be.length;)be.shift();for(;C.length;)be.push(C.shift())}ue.copy(this.faceNormals[S]);var Qe=this.getPlaneConstantOfFace(S);re.copy(ue),U.vmult(re,re);for(var qe=Qe-re.dot(q),Me=0;Me<be.length;Me++){var He=re.dot(be[Me])+qe;if(He<=A&&(console.log("clamped: depth="+He+" to minDist="+(A+"")),He=A),He<=G){var Be=be[Me];if(He<=0){var Je={point:Be,normal:re,depth:He};ie.push(Je)}}}}},l.prototype.clipFaceAgainstPlane=function(L,q,U,b){var A,G,ie=L.length;if(ie<2)return q;var te=L[L.length-1],X=L[0];A=U.dot(te)+b;for(var se=0;se<ie;se++){if(X=L[se],G=U.dot(X)+b,A<0)if(G<0){var ce=new a;ce.copy(X),q.push(ce)}else{var ce=new a;te.lerp(X,A/(A-G),ce),q.push(ce)}else if(G<0){var ce=new a;te.lerp(X,A/(A-G),ce),q.push(ce),q.push(X)}te=X,A=G}return q},l.prototype.computeWorldVertices=function(L,q){for(var U=this.vertices.length;this.worldVertices.length<U;)this.worldVertices.push(new a);for(var b=this.vertices,A=this.worldVertices,G=0;G!==U;G++)q.vmult(b[G],A[G]),L.vadd(A[G],A[G]);this.worldVerticesNeedsUpdate=!1},new a,l.prototype.computeLocalAABB=function(L,q){var U=this.vertices.length,b=this.vertices;L.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),q.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(var A=0;A<U;A++){var G=b[A];G.x<L.x?L.x=G.x:G.x>q.x&&(q.x=G.x),G.y<L.y?L.y=G.y:G.y>q.y&&(q.y=G.y),G.z<L.z?L.z=G.z:G.z>q.z&&(q.z=G.z)}},l.prototype.computeWorldFaceNormals=function(L){for(var q=this.faceNormals.length;this.worldFaceNormals.length<q;)this.worldFaceNormals.push(new a);for(var U=this.faceNormals,b=this.worldFaceNormals,A=0;A!==q;A++)L.vmult(U[A],b[A]);this.worldFaceNormalsNeedsUpdate=!1},l.prototype.updateBoundingSphereRadius=function(){for(var L=0,q=this.vertices,U=0,b=q.length;U!==b;U++){var A=q[U].norm2();A>L&&(L=A)}this.boundingSphereRadius=Math.sqrt(L)};var W=new a;l.prototype.calculateWorldAABB=function(L,q,U,b){for(var A=this.vertices.length,G=this.vertices,ie,te,X,se,ce,H,Ae=0;Ae<A;Ae++){W.copy(G[Ae]),q.vmult(W,W),L.vadd(W,W);var ue=W;ue.x<ie||ie===void 0?ie=ue.x:(ue.x>se||se===void 0)&&(se=ue.x),ue.y<te||te===void 0?te=ue.y:(ue.y>ce||ce===void 0)&&(ce=ue.y),ue.z<X||X===void 0?X=ue.z:(ue.z>H||H===void 0)&&(H=ue.z)}U.set(ie,te,X),b.set(se,ce,H)},l.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},l.prototype.getAveragePointLocal=function(L){L=L||new a;for(var q=this.vertices.length,U=this.vertices,b=0;b<q;b++)L.vadd(U[b],L);return L.mult(1/q,L),L},l.prototype.transformAllPoints=function(L,q){var U=this.vertices.length,b=this.vertices;if(q){for(var A=0;A<U;A++){var G=b[A];q.vmult(G,G)}for(var A=0;A<this.faceNormals.length;A++){var G=this.faceNormals[A];q.vmult(G,G)}}if(L)for(var A=0;A<U;A++){var G=b[A];G.vadd(L,G)}};var Z=new a,O=new a,I=new a;l.prototype.pointIsInside=function(L){var q=this.vertices.length,U=this.vertices,b=this.faces,A=this.faceNormals,G=null,ie=this.faces.length,te=Z;this.getAveragePointLocal(te);for(var X=0;X<ie;X++){this.faces[X].length;var q=A[X],se=U[b[X][0]],ce=O;L.vsub(se,ce);var H=q.dot(ce),Ae=I;te.vsub(se,Ae);var ue=q.dot(Ae);if(H<0&&ue>0||H>0&&ue<0)return!1}return G?1:-1},new a;var j=new a,Y=new a;l.project=function(L,q,U,b,A){var G=L.vertices.length,ie=j,te=0,X=0,se=Y,ce=L.vertices;se.setZero(),o.vectorToLocalFrame(U,b,q,ie),o.pointToLocalFrame(U,b,se,se);var H=se.dot(ie);X=te=ce[0].dot(ie);for(var Ae=1;Ae<G;Ae++){var ue=ce[Ae].dot(ie);ue>te&&(te=ue),ue<X&&(X=ue)}if(X-=H,te-=H,X>te){var re=X;X=te,te=re}A[0]=te,A[1]=X}},{"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"./Shape":43}],39:[function(t,n,r){n.exports=l;var s=t("./Shape"),a=t("../math/Vec3");t("../math/Quaternion");var o=t("./ConvexPolyhedron");function l(h,u,c,d){var f=d,v=[],g=[],p=[],m=[],_=[],y=Math.cos,x=Math.sin;v.push(new a(u*y(0),u*x(0),-c*.5)),m.push(0),v.push(new a(h*y(0),h*x(0),c*.5)),_.push(1);for(var w=0;w<f;w++){var R=2*Math.PI/f*(w+1),P=2*Math.PI/f*(w+.5);w<f-1?(v.push(new a(u*y(R),u*x(R),-c*.5)),m.push(2*w+2),v.push(new a(h*y(R),h*x(R),c*.5)),_.push(2*w+3),p.push([2*w+2,2*w+3,2*w+1,2*w])):p.push([0,1,2*w+1,2*w]),(f%2===1||w<f/2)&&g.push(new a(y(P),x(P),0))}p.push(_),g.push(new a(0,0,1));for(var F=[],w=0;w<m.length;w++)F.push(m[m.length-w-1]);p.push(F),this.type=s.types.CONVEXPOLYHEDRON,o.call(this,v,p,g)}l.prototype=new o},{"../math/Quaternion":28,"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],40:[function(t,n,r){var s=t("./Shape"),a=t("./ConvexPolyhedron"),o=t("../math/Vec3"),l=t("../utils/Utils");n.exports=h;function h(u,c){c=l.defaults(c,{maxValue:null,minValue:null,elementSize:1}),this.data=u,this.maxValue=c.maxValue,this.minValue=c.minValue,this.elementSize=c.elementSize,c.minValue===null&&this.updateMinValue(),c.maxValue===null&&this.updateMaxValue(),this.cacheEnabled=!0,s.call(this),this.pillarConvex=new a,this.pillarOffset=new o,this.type=s.types.HEIGHTFIELD,this.updateBoundingSphereRadius(),this._cachedPillars={}}h.prototype=new s,h.prototype.update=function(){this._cachedPillars={}},h.prototype.updateMinValue=function(){for(var u=this.data,c=u[0][0],d=0;d!==u.length;d++)for(var f=0;f!==u[d].length;f++){var v=u[d][f];v<c&&(c=v)}this.minValue=c},h.prototype.updateMaxValue=function(){for(var u=this.data,c=u[0][0],d=0;d!==u.length;d++)for(var f=0;f!==u[d].length;f++){var v=u[d][f];v>c&&(c=v)}this.maxValue=c},h.prototype.setHeightValueAtIndex=function(u,c,d){var f=this.data;f[u][c]=d,this.clearCachedConvexTrianglePillar(u,c,!1),u>0&&(this.clearCachedConvexTrianglePillar(u-1,c,!0),this.clearCachedConvexTrianglePillar(u-1,c,!1)),c>0&&(this.clearCachedConvexTrianglePillar(u,c-1,!0),this.clearCachedConvexTrianglePillar(u,c-1,!1)),c>0&&u>0&&this.clearCachedConvexTrianglePillar(u-1,c-1,!0)},h.prototype.getRectMinMax=function(u,c,d,f,v){v=v||[];for(var g=this.data,p=this.minValue,m=u;m<=d;m++)for(var _=c;_<=f;_++){var y=g[m][_];y>p&&(p=y)}v[0]=this.minValue,v[1]=p},h.prototype.getIndexOfPosition=function(u,c,d,f){var v=this.elementSize,g=this.data,p=Math.floor(u/v),m=Math.floor(c/v);return d[0]=p,d[1]=m,f&&(p<0&&(p=0),m<0&&(m=0),p>=g.length-1&&(p=g.length-1),m>=g[0].length-1&&(m=g[0].length-1)),!(p<0||m<0||p>=g.length-1||m>=g[0].length-1)},h.prototype.getHeightAt=function(u,c,d){var f=[];this.getIndexOfPosition(u,c,f,d);var v=[];return this.getRectMinMax(f[0],f[1]+1,f[0],f[1]+1,v),(v[0]+v[1])/2},h.prototype.getCacheConvexTrianglePillarKey=function(u,c,d){return u+"_"+c+"_"+(d?1:0)},h.prototype.getCachedConvexTrianglePillar=function(u,c,d){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(u,c,d)]},h.prototype.setCachedConvexTrianglePillar=function(u,c,d,f,v){this._cachedPillars[this.getCacheConvexTrianglePillarKey(u,c,d)]={convex:f,offset:v}},h.prototype.clearCachedConvexTrianglePillar=function(u,c,d){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(u,c,d)]},h.prototype.getConvexTrianglePillar=function(u,c,d){var f=this.pillarConvex,v=this.pillarOffset;if(this.cacheEnabled){var g=this.getCachedConvexTrianglePillar(u,c,d);if(g){this.pillarConvex=g.convex,this.pillarOffset=g.offset;return}f=new a,v=new o,this.pillarConvex=f,this.pillarOffset=v}var g=this.data,p=this.elementSize,m=f.faces;f.vertices.length=6;for(var _=0;_<6;_++)f.vertices[_]||(f.vertices[_]=new o);m.length=5;for(var _=0;_<5;_++)m[_]||(m[_]=[]);var y=f.vertices,x=(Math.min(g[u][c],g[u+1][c],g[u][c+1],g[u+1][c+1])-this.minValue)/2+this.minValue;d?(v.set((u+.75)*p,(c+.75)*p,x),y[0].set(.25*p,.25*p,g[u+1][c+1]-x),y[1].set(-.75*p,.25*p,g[u][c+1]-x),y[2].set(.25*p,-.75*p,g[u+1][c]-x),y[3].set(.25*p,.25*p,-x-1),y[4].set(-.75*p,.25*p,-x-1),y[5].set(.25*p,-.75*p,-x-1),m[0][0]=0,m[0][1]=1,m[0][2]=2,m[1][0]=5,m[1][1]=4,m[1][2]=3,m[2][0]=2,m[2][1]=5,m[2][2]=3,m[2][3]=0,m[3][0]=3,m[3][1]=4,m[3][2]=1,m[3][3]=0,m[4][0]=1,m[4][1]=4,m[4][2]=5,m[4][3]=2):(v.set((u+.25)*p,(c+.25)*p,x),y[0].set(-.25*p,-.25*p,g[u][c]-x),y[1].set(.75*p,-.25*p,g[u+1][c]-x),y[2].set(-.25*p,.75*p,g[u][c+1]-x),y[3].set(-.25*p,-.25*p,-x-1),y[4].set(.75*p,-.25*p,-x-1),y[5].set(-.25*p,.75*p,-x-1),m[0][0]=0,m[0][1]=1,m[0][2]=2,m[1][0]=5,m[1][1]=4,m[1][2]=3,m[2][0]=0,m[2][1]=2,m[2][2]=5,m[2][3]=3,m[3][0]=1,m[3][1]=0,m[3][2]=3,m[3][3]=4,m[4][0]=4,m[4][1]=5,m[4][2]=2,m[4][3]=1),f.computeNormals(),f.computeEdges(),f.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(u,c,d,f,v)},h.prototype.calculateLocalInertia=function(u,c){return c=c||new o,c.set(0,0,0),c},h.prototype.volume=function(){return Number.MAX_VALUE},h.prototype.calculateWorldAABB=function(u,c,d,f){d.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),f.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)},h.prototype.updateBoundingSphereRadius=function(){var u=this.data,c=this.elementSize;this.boundingSphereRadius=new o(u.length*c,u[0].length*c,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).norm()}},{"../math/Vec3":30,"../utils/Utils":53,"./ConvexPolyhedron":38,"./Shape":43}],41:[function(t,n,r){n.exports=o;var s=t("./Shape"),a=t("../math/Vec3");function o(){s.call(this),this.type=s.types.PARTICLE}o.prototype=new s,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(l,h){return h=h||new a,h.set(0,0,0),h},o.prototype.volume=function(){return 0},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=0},o.prototype.calculateWorldAABB=function(l,h,u,c){u.copy(l),c.copy(l)}},{"../math/Vec3":30,"./Shape":43}],42:[function(t,n,r){n.exports=o;var s=t("./Shape"),a=t("../math/Vec3");function o(){s.call(this),this.type=s.types.PLANE,this.worldNormal=new a,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}o.prototype=new s,o.prototype.constructor=o,o.prototype.computeWorldNormal=function(h){var u=this.worldNormal;u.set(0,0,1),h.vmult(u,u),this.worldNormalNeedsUpdate=!1},o.prototype.calculateLocalInertia=function(h,u){return u=u||new a,u},o.prototype.volume=function(){return Number.MAX_VALUE};var l=new a;o.prototype.calculateWorldAABB=function(h,u,c,d){l.set(0,0,1),u.vmult(l,l);var f=Number.MAX_VALUE;c.set(-f,-f,-f),d.set(f,f,f),l.x===1&&(d.x=h.x),l.y===1&&(d.y=h.y),l.z===1&&(d.z=h.z),l.x===-1&&(c.x=h.x),l.y===-1&&(c.y=h.y),l.z===-1&&(c.z=h.z)},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=Number.MAX_VALUE}},{"../math/Vec3":30,"./Shape":43}],43:[function(t,n,r){n.exports=s;var s=t("./Shape");t("../math/Vec3"),t("../math/Quaternion"),t("../material/Material");function s(){this.id=s.idCounter++,this.type=0,this.boundingSphereRadius=0,this.collisionResponse=!0,this.material=null}s.prototype.constructor=s,s.prototype.updateBoundingSphereRadius=function(){throw"computeBoundingSphereRadius() not implemented for shape type "+this.type},s.prototype.volume=function(){throw"volume() not implemented for shape type "+this.type},s.prototype.calculateLocalInertia=function(a,o){throw"calculateLocalInertia() not implemented for shape type "+this.type},s.idCounter=0,s.types={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"./Shape":43}],44:[function(t,n,r){n.exports=o;var s=t("./Shape"),a=t("../math/Vec3");function o(l){if(s.call(this),this.radius=l!==void 0?Number(l):1,this.type=s.types.SPHERE,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}o.prototype=new s,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(l,h){h=h||new a;var u=2*l*this.radius*this.radius/5;return h.x=u,h.y=u,h.z=u,h},o.prototype.volume=function(){return 4*Math.PI*this.radius/3},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.radius},o.prototype.calculateWorldAABB=function(l,h,u,c){for(var d=this.radius,f=["x","y","z"],v=0;v<f.length;v++){var g=f[v];u[g]=l[g]-d,c[g]=l[g]+d}}},{"../math/Vec3":30,"./Shape":43}],45:[function(t,n,r){n.exports=u;var s=t("./Shape"),a=t("../math/Vec3");t("../math/Quaternion");var o=t("../math/Transform"),l=t("../collision/AABB"),h=t("../utils/Octree");function u(F,K){s.call(this),this.type=s.types.TRIMESH,this.vertices=new Float32Array(F),this.indices=new Int16Array(K),this.normals=new Float32Array(K.length),this.aabb=new l,this.edges=null,this.scale=new a(1,1,1),this.tree=new h,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}u.prototype=new s,u.prototype.constructor=u;var c=new a;u.prototype.updateTree=function(){var F=this.tree;F.reset(),F.aabb.copy(this.aabb);var K=this.scale;F.aabb.lowerBound.x*=1/K.x,F.aabb.lowerBound.y*=1/K.y,F.aabb.lowerBound.z*=1/K.z,F.aabb.upperBound.x*=1/K.x,F.aabb.upperBound.y*=1/K.y,F.aabb.upperBound.z*=1/K.z;for(var M=new l,E=new a,z=new a,k=new a,N=[E,z,k],W=0;W<this.indices.length/3;W++){var Z=W*3;this._getUnscaledVertex(this.indices[Z],E),this._getUnscaledVertex(this.indices[Z+1],z),this._getUnscaledVertex(this.indices[Z+2],k),M.setFromPoints(N),F.insert(M,W)}F.removeEmptyNodes()};var d=new l;u.prototype.getTrianglesInAABB=function(F,K){d.copy(F);var M=this.scale,E=M.x,z=M.y,k=M.z,N=d.lowerBound,W=d.upperBound;return N.x/=E,N.y/=z,N.z/=k,W.x/=E,W.y/=z,W.z/=k,this.tree.aabbQuery(d,K)},u.prototype.setScale=function(F){var K=this.scale.x===this.scale.y===this.scale.z,M=F.x===F.y===F.z;K&&M||this.updateNormals(),this.scale.copy(F),this.updateAABB(),this.updateBoundingSphereRadius()},u.prototype.updateNormals=function(){for(var F=c,K=this.normals,M=0;M<this.indices.length/3;M++){var E=M*3,z=this.indices[E],k=this.indices[E+1],N=this.indices[E+2];this.getVertex(z,m),this.getVertex(k,_),this.getVertex(N,y),u.computeNormal(_,m,y,F),K[E]=F.x,K[E+1]=F.y,K[E+2]=F.z}},u.prototype.updateEdges=function(){for(var F={},K=function(Z,O){var I=z<k?z+"_"+k:k+"_"+z;F[I]=!0},M=0;M<this.indices.length/3;M++){var E=M*3,z=this.indices[E],k=this.indices[E+1];this.indices[E+2],K(),K(),K()}var N=Object.keys(F);this.edges=new Int16Array(N.length*2);for(var M=0;M<N.length;M++){var W=N[M].split("_");this.edges[2*M]=parseInt(W[0],10),this.edges[2*M+1]=parseInt(W[1],10)}},u.prototype.getEdgeVertex=function(F,K,M){var E=this.edges[F*2+(K?1:0)];this.getVertex(E,M)};var f=new a,v=new a;u.prototype.getEdgeVector=function(F,K){var M=f,E=v;this.getEdgeVertex(F,0,M),this.getEdgeVertex(F,1,E),E.vsub(M,K)};var g=new a,p=new a;u.computeNormal=function(F,K,M,E){K.vsub(F,p),M.vsub(K,g),g.cross(p,E),E.isZero()||E.normalize()};var m=new a,_=new a,y=new a;u.prototype.getVertex=function(F,K){var M=this.scale;return this._getUnscaledVertex(F,K),K.x*=M.x,K.y*=M.y,K.z*=M.z,K},u.prototype._getUnscaledVertex=function(F,K){var M=F*3,E=this.vertices;return K.set(E[M],E[M+1],E[M+2])},u.prototype.getWorldVertex=function(F,K,M,E){return this.getVertex(F,E),o.pointToWorldFrame(K,M,E,E),E},u.prototype.getTriangleVertices=function(F,K,M,E){var z=F*3;this.getVertex(this.indices[z],K),this.getVertex(this.indices[z+1],M),this.getVertex(this.indices[z+2],E)},u.prototype.getNormal=function(F,K){var M=F*3;return K.set(this.normals[M],this.normals[M+1],this.normals[M+2])};var x=new l;u.prototype.calculateLocalInertia=function(F,K){this.computeLocalAABB(x);var M=x.upperBound.x-x.lowerBound.x,E=x.upperBound.y-x.lowerBound.y,z=x.upperBound.z-x.lowerBound.z;return K.set(1/12*F*(2*E*2*E+2*z*2*z),1/12*F*(2*M*2*M+2*z*2*z),1/12*F*(2*E*2*E+2*M*2*M))};var w=new a;u.prototype.computeLocalAABB=function(F){var K=F.lowerBound,M=F.upperBound,E=this.vertices.length;this.vertices;var z=w;this.getVertex(0,z),K.copy(z),M.copy(z);for(var k=0;k!==E;k++)this.getVertex(k,z),z.x<K.x?K.x=z.x:z.x>M.x&&(M.x=z.x),z.y<K.y?K.y=z.y:z.y>M.y&&(M.y=z.y),z.z<K.z?K.z=z.z:z.z>M.z&&(M.z=z.z)},u.prototype.updateAABB=function(){this.computeLocalAABB(this.aabb)},u.prototype.updateBoundingSphereRadius=function(){for(var F=0,K=this.vertices,M=new a,E=0,z=K.length/3;E!==z;E++){this.getVertex(E,M);var k=M.norm2();k>F&&(F=k)}this.boundingSphereRadius=Math.sqrt(F)},new a;var R=new o,P=new l;u.prototype.calculateWorldAABB=function(F,K,M,E){var z=R,k=P;z.position=F,z.quaternion=K,this.aabb.toWorldFrame(z,k),M.copy(k.lowerBound),E.copy(k.upperBound)},u.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},u.createTorus=function(F,K,M,E,z){F=F||1,K=K||.5,M=M||8,E=E||6,z=z||Math.PI*2;for(var k=[],N=[],W=0;W<=M;W++)for(var Z=0;Z<=E;Z++){var O=Z/E*z,I=W/M*Math.PI*2,j=(F+K*Math.cos(I))*Math.cos(O),Y=(F+K*Math.cos(I))*Math.sin(O),L=K*Math.sin(I);k.push(j,Y,L)}for(var W=1;W<=M;W++)for(var Z=1;Z<=E;Z++){var q=(E+1)*W+Z-1,U=(E+1)*(W-1)+Z-1,b=(E+1)*(W-1)+Z,A=(E+1)*W+Z;N.push(q,U,A),N.push(U,b,A)}return new u(k,N)}},{"../collision/AABB":3,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../utils/Octree":50,"./Shape":43}],46:[function(t,n,r){n.exports=a,t("../math/Vec3"),t("../math/Quaternion");var s=t("./Solver");function a(){s.call(this),this.iterations=10,this.tolerance=1e-7}a.prototype=new s;var o=[],l=[],h=[];a.prototype.solve=function(u,c){var d=0,f=this.iterations,v=this.tolerance*this.tolerance,g=this.equations,p=g.length,m=c.bodies,_=m.length,y=u,x,w,R,P,F,K;if(p!==0)for(var M=0;M!==_;M++)m[M].updateSolveMassProperties();var E=l,z=h,k=o;E.length=p,z.length=p,k.length=p;for(var M=0;M!==p;M++){var N=g[M];k[M]=0,z[M]=N.computeB(y),E[M]=1/N.computeC()}if(p!==0){for(var M=0;M!==_;M++){var W=m[M],Z=W.vlambda,O=W.wlambda;Z.set(0,0,0),O&&O.set(0,0,0)}for(d=0;d!==f;d++){P=0;for(var I=0;I!==p;I++){var N=g[I];x=z[I],w=E[I],K=k[I],F=N.computeGWlambda(),R=w*(x-F-N.eps*K),K+R<N.minForce?R=N.minForce-K:K+R>N.maxForce&&(R=N.maxForce-K),k[I]+=R,P+=R>0?R:-R,N.addToWlambda(R)}if(P*P<v)break}for(var M=0;M!==_;M++){var W=m[M],j=W.velocity,Y=W.angularVelocity;j.vadd(W.vlambda,j),Y&&Y.vadd(W.wlambda,Y)}}return d}},{"../math/Quaternion":28,"../math/Vec3":30,"./Solver":47}],47:[function(t,n,r){n.exports=s;function s(){this.equations=[]}s.prototype.solve=function(a,o){return 0},s.prototype.addEquation=function(a){a.enabled&&this.equations.push(a)},s.prototype.removeEquation=function(a){var o=this.equations,l=o.indexOf(a);l!==-1&&o.splice(l,1)},s.prototype.removeAllEquations=function(){this.equations.length=0}},{}],48:[function(t,n,r){n.exports=o,t("../math/Vec3"),t("../math/Quaternion");var s=t("./Solver"),a=t("../objects/Body");function o(m){for(s.call(this),this.iterations=10,this.tolerance=1e-7,this.subsolver=m,this.nodes=[],this.nodePool=[];this.nodePool.length<128;)this.nodePool.push(this.createNode())}o.prototype=new s;var l=[],h=[],u={bodies:[]},c=a.STATIC;function d(m){for(var _=m.length,y=0;y!==_;y++){var x=m[y];if(!x.visited&&!(x.body.type&c))return x}return!1}var f=[];function v(m,_,y,x){for(f.push(m),m.visited=!0,_(m,y,x);f.length;)for(var w=f.pop(),R;R=d(w.children);)R.visited=!0,_(R,y,x),f.push(R)}function g(m,_,y){_.push(m.body);for(var x=m.eqs.length,w=0;w!==x;w++){var R=m.eqs[w];y.indexOf(R)===-1&&y.push(R)}}o.prototype.createNode=function(){return{body:null,children:[],eqs:[],visited:!1}},o.prototype.solve=function(m,_){for(var y=l,x=this.nodePool,w=_.bodies,R=this.equations,P=R.length,F=w.length,K=this.subsolver;x.length<F;)x.push(this.createNode());y.length=F;for(var M=0;M<F;M++)y[M]=x[M];for(var M=0;M!==F;M++){var E=y[M];E.body=w[M],E.children.length=0,E.eqs.length=0,E.visited=!1}for(var z=0;z!==P;z++){var k=R[z],M=w.indexOf(k.bi),N=w.indexOf(k.bj),W=y[M],Z=y[N];W.children.push(Z),W.eqs.push(k),Z.children.push(W),Z.eqs.push(k)}var O,I=0,j=h;K.tolerance=this.tolerance,K.iterations=this.iterations;for(var Y=u;O=d(y);){j.length=0,Y.bodies.length=0,v(O,g,Y.bodies,j);var L=j.length;j=j.sort(p);for(var M=0;M!==L;M++)K.addEquation(j[M]);K.solve(m,Y),K.removeAllEquations(),I++}return I};function p(m,_){return _.id-m.id}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"./Solver":47}],49:[function(t,n,r){var s=function(){};n.exports=s,s.prototype={constructor:s,addEventListener:function(a,o){this._listeners===void 0&&(this._listeners={});var l=this._listeners;return l[a]===void 0&&(l[a]=[]),l[a].indexOf(o)===-1&&l[a].push(o),this},hasEventListener:function(a,o){if(this._listeners===void 0)return!1;var l=this._listeners;return l[a]!==void 0&&l[a].indexOf(o)!==-1},removeEventListener:function(a,o){if(this._listeners===void 0)return this;var l=this._listeners;if(l[a]===void 0)return this;var h=l[a].indexOf(o);return h!==-1&&l[a].splice(h,1),this},dispatchEvent:function(a){if(this._listeners===void 0)return this;var o=this._listeners,l=o[a.type];if(l!==void 0){a.target=this;for(var h=0,u=l.length;h<u;h++)l[h].call(this,a)}return this}}},{}],50:[function(t,n,r){var s=t("../collision/AABB"),a=t("../math/Vec3");n.exports=l;function o(c){c=c||{},this.root=c.root||null,this.aabb=c.aabb?c.aabb.clone():new s,this.data=[],this.children=[]}function l(c,d){d=d||{},d.root=null,d.aabb=c,o.call(this,d),this.maxDepth=typeof d.maxDepth<"u"?d.maxDepth:8}l.prototype=new o,o.prototype.reset=function(c,d){this.children.length=this.data.length=0},o.prototype.insert=function(c,d,f){var v=this.data;if(f=f||0,!this.aabb.contains(c))return!1;var g=this.children;if(f<(this.maxDepth||this.root.maxDepth)){var p=!1;g.length||(this.subdivide(),p=!0);for(var m=0;m!==8;m++)if(g[m].insert(c,d,f+1))return!0;p&&(g.length=0)}return v.push(d),!0};var h=new a;o.prototype.subdivide=function(){var c=this.aabb,d=c.lowerBound,f=c.upperBound,v=this.children;v.push(new o({aabb:new s({lowerBound:new a(0,0,0)})}),new o({aabb:new s({lowerBound:new a(1,0,0)})}),new o({aabb:new s({lowerBound:new a(1,1,0)})}),new o({aabb:new s({lowerBound:new a(1,1,1)})}),new o({aabb:new s({lowerBound:new a(0,1,1)})}),new o({aabb:new s({lowerBound:new a(0,0,1)})}),new o({aabb:new s({lowerBound:new a(1,0,1)})}),new o({aabb:new s({lowerBound:new a(0,1,0)})})),f.vsub(d,h),h.scale(.5,h);for(var g=this.root||this,p=0;p!==8;p++){var m=v[p];m.root=g;var _=m.aabb.lowerBound;_.x*=h.x,_.y*=h.y,_.z*=h.z,_.vadd(d,_),_.vadd(h,m.aabb.upperBound)}},o.prototype.aabbQuery=function(c,d){this.data,this.children;for(var f=[this];f.length;){var v=f.pop();v.aabb.overlaps(c)&&Array.prototype.push.apply(d,v.data),Array.prototype.push.apply(f,v.children)}return d};var u=new s;o.prototype.rayQuery=function(c,d,f){return c.getAABB(u),u.toLocalFrame(d,u),this.aabbQuery(u,f),f},o.prototype.removeEmptyNodes=function(){for(var c=[this];c.length;){for(var d=c.pop(),f=d.children.length-1;f>=0;f--)d.children[f].data.length||d.children.splice(f,1);Array.prototype.push.apply(c,d.children)}}},{"../collision/AABB":3,"../math/Vec3":30}],51:[function(t,n,r){n.exports=s;function s(){this.objects=[],this.type=Object}s.prototype.release=function(){for(var a=arguments.length,o=0;o!==a;o++)this.objects.push(arguments[o])},s.prototype.get=function(){return this.objects.length===0?this.constructObject():this.objects.pop()},s.prototype.constructObject=function(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}},{}],52:[function(t,n,r){n.exports=s;function s(){this.data={keys:[]}}s.prototype.get=function(a,o){if(a>o){var l=o;o=a,a=l}return this.data[a+"-"+o]},s.prototype.set=function(a,o,l){if(a>o){var h=o;o=a,a=h}var u=a+"-"+o;this.get(a,o)||this.data.keys.push(u),this.data[u]=l},s.prototype.reset=function(){for(var a=this.data,o=a.keys;o.length>0;){var l=o.pop();delete a[l]}}},{}],53:[function(t,n,r){function s(){}n.exports=s,s.defaults=function(a,o){a=a||{};for(var l in o)l in a||(a[l]=o[l]);return a}},{}],54:[function(t,n,r){n.exports=o;var s=t("../math/Vec3"),a=t("./Pool");function o(){a.call(this),this.type=s}o.prototype=new a,o.prototype.constructObject=function(){return new s}},{"../math/Vec3":30,"./Pool":51}],55:[function(t,n,r){n.exports=v;var s=t("../collision/AABB"),a=t("../shapes/Shape"),o=t("../collision/Ray"),l=t("../math/Vec3"),h=t("../math/Transform");t("../shapes/ConvexPolyhedron");var u=t("../math/Quaternion");t("../solver/Solver");var c=t("../utils/Vec3Pool"),d=t("../equations/ContactEquation"),f=t("../equations/FrictionEquation");function v(le){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new c,this.world=le,this.currentContactMaterial=null,this.enableFrictionReduction=!1}v.prototype.createContactEquation=function(le,oe,fe,me,Ze,Fe){var Ee;this.contactPointPool.length?(Ee=this.contactPointPool.pop(),Ee.bi=le,Ee.bj=oe):Ee=new d(le,oe),Ee.enabled=le.collisionResponse&&oe.collisionResponse&&fe.collisionResponse&&me.collisionResponse;var Le=this.currentContactMaterial;Ee.restitution=Le.restitution,Ee.setSpookParams(Le.contactEquationStiffness,Le.contactEquationRelaxation,this.world.dt);var ne=fe.material||le.material,Re=me.material||oe.material;return ne&&Re&&ne.restitution>=0&&Re.restitution>=0&&(Ee.restitution=ne.restitution*Re.restitution),Ee.si=Ze||fe,Ee.sj=Fe||me,Ee},v.prototype.createFrictionEquationsFromContact=function(le,oe){var fe=le.bi,me=le.bj,Ze=le.si,Fe=le.sj,Ee=this.world,Le=this.currentContactMaterial,ne=Le.friction,Re=Ze.material||fe.material,Ie=Fe.material||me.material;if(Re&&Ie&&Re.friction>=0&&Ie.friction>=0&&(ne=Re.friction*Ie.friction),ne>0){var Oe=ne*Ee.gravity.length(),Pe=fe.invMass+me.invMass;Pe>0&&(Pe=1/Pe);var Te=this.frictionEquationPool,T=Te.length?Te.pop():new f(fe,me,Oe*Pe),V=Te.length?Te.pop():new f(fe,me,Oe*Pe);return T.bi=V.bi=fe,T.bj=V.bj=me,T.minForce=V.minForce=-Oe*Pe,T.maxForce=V.maxForce=Oe*Pe,T.ri.copy(le.ri),T.rj.copy(le.rj),V.ri.copy(le.ri),V.rj.copy(le.rj),le.ni.tangents(T.t,V.t),T.setSpookParams(Le.frictionEquationStiffness,Le.frictionEquationRelaxation,Ee.dt),V.setSpookParams(Le.frictionEquationStiffness,Le.frictionEquationRelaxation,Ee.dt),T.enabled=V.enabled=le.enabled,oe.push(T,V),!0}return!1};var g=new l,p=new l,m=new l;v.prototype.createFrictionFromAverage=function(le){var oe=this.result[this.result.length-1];if(!(!this.createFrictionEquationsFromContact(oe,this.frictionResult)||le===1)){var fe=this.frictionResult[this.frictionResult.length-2],me=this.frictionResult[this.frictionResult.length-1];g.setZero(),p.setZero(),m.setZero();var Ze=oe.bi;oe.bj;for(var Fe=0;Fe!==le;Fe++)oe=this.result[this.result.length-1-Fe],oe.bodyA!==Ze?(g.vadd(oe.ni,g),p.vadd(oe.ri,p),m.vadd(oe.rj,m)):(g.vsub(oe.ni,g),p.vadd(oe.rj,p),m.vadd(oe.ri,m));var Ee=1/le;p.scale(Ee,fe.ri),m.scale(Ee,fe.rj),me.ri.copy(fe.ri),me.rj.copy(fe.rj),g.normalize(),g.tangents(fe.t,me.t)}};var _=new l,y=new l,x=new u,w=new u;v.prototype.getContacts=function(le,oe,fe,me,Ze,Fe,Ee){this.contactPointPool=Ze,this.frictionEquationPool=Ee,this.result=me,this.frictionResult=Fe;for(var Le=x,ne=w,Re=_,Ie=y,Oe=0,Pe=le.length;Oe!==Pe;Oe++){var Te=le[Oe],T=oe[Oe],V=null;Te.material&&T.material&&(V=fe.getContactMaterial(Te.material,T.material)||null);for(var $=0;$<Te.shapes.length;$++){Te.quaternion.mult(Te.shapeOrientations[$],Le),Te.quaternion.vmult(Te.shapeOffsets[$],Re),Re.vadd(Te.position,Re);for(var B=Te.shapes[$],J=0;J<T.shapes.length;J++){T.quaternion.mult(T.shapeOrientations[J],ne),T.quaternion.vmult(T.shapeOffsets[J],Ie),Ie.vadd(T.position,Ie);var ve=T.shapes[J];if(!(Re.distanceTo(Ie)>B.boundingSphereRadius+ve.boundingSphereRadius)){var Ue=null;B.material&&ve.material&&(Ue=fe.getContactMaterial(B.material,ve.material)||null),this.currentContactMaterial=Ue||V||fe.defaultContactMaterial;var Ce=this[B.type|ve.type];Ce&&(B.type<ve.type?Ce.call(this,B,ve,Re,Ie,Le,ne,Te,T,B,ve):Ce.call(this,ve,B,Ie,Re,ne,Le,T,Te,B,ve))}}}}},v.prototype[a.types.BOX|a.types.BOX]=v.prototype.boxBox=function(le,oe,fe,me,Ze,Fe,Ee,Le){le.convexPolyhedronRepresentation.material=le.material,oe.convexPolyhedronRepresentation.material=oe.material,le.convexPolyhedronRepresentation.collisionResponse=le.collisionResponse,oe.convexPolyhedronRepresentation.collisionResponse=oe.collisionResponse,this.convexConvex(le.convexPolyhedronRepresentation,oe.convexPolyhedronRepresentation,fe,me,Ze,Fe,Ee,Le,le,oe)},v.prototype[a.types.BOX|a.types.CONVEXPOLYHEDRON]=v.prototype.boxConvex=function(le,oe,fe,me,Ze,Fe,Ee,Le){le.convexPolyhedronRepresentation.material=le.material,le.convexPolyhedronRepresentation.collisionResponse=le.collisionResponse,this.convexConvex(le.convexPolyhedronRepresentation,oe,fe,me,Ze,Fe,Ee,Le,le,oe)},v.prototype[a.types.BOX|a.types.PARTICLE]=v.prototype.boxParticle=function(le,oe,fe,me,Ze,Fe,Ee,Le){le.convexPolyhedronRepresentation.material=le.material,le.convexPolyhedronRepresentation.collisionResponse=le.collisionResponse,this.convexParticle(le.convexPolyhedronRepresentation,oe,fe,me,Ze,Fe,Ee,Le,le,oe)},v.prototype[a.types.SPHERE]=v.prototype.sphereSphere=function(le,oe,fe,me,Ze,Fe,Ee,Le){var ne=this.createContactEquation(Ee,Le,le,oe);me.vsub(fe,ne.ni),ne.ni.normalize(),ne.ri.copy(ne.ni),ne.rj.copy(ne.ni),ne.ri.mult(le.radius,ne.ri),ne.rj.mult(-oe.radius,ne.rj),ne.ri.vadd(fe,ne.ri),ne.ri.vsub(Ee.position,ne.ri),ne.rj.vadd(me,ne.rj),ne.rj.vsub(Le.position,ne.rj),this.result.push(ne),this.createFrictionEquationsFromContact(ne,this.frictionResult)};var R=new l,P=new l,F=new l;v.prototype[a.types.PLANE|a.types.TRIMESH]=v.prototype.planeTrimesh=function(le,oe,fe,me,Ze,Fe,Ee,Le){var ne=new l,Re=R;Re.set(0,0,1),Ze.vmult(Re,Re);for(var Ie=0;Ie<oe.vertices.length/3;Ie++){oe.getVertex(Ie,ne);var Oe=new l;Oe.copy(ne),h.pointToWorldFrame(me,Fe,Oe,ne);var Pe=P;ne.vsub(fe,Pe);var Te=Re.dot(Pe);if(Te<=0){var T=this.createContactEquation(Ee,Le,le,oe);T.ni.copy(Re);var V=F;Re.scale(Pe.dot(Re),V),ne.vsub(V,V),T.ri.copy(V),T.ri.vsub(Ee.position,T.ri),T.rj.copy(ne),T.rj.vsub(Le.position,T.rj),this.result.push(T),this.createFrictionEquationsFromContact(T,this.frictionResult)}}};var K=new l,M=new l;new l;var E=new l,z=new l,k=new l,N=new l,W=new l,Z=new l,O=new l,I=new l,j=new l,Y=new l,L=new l,q=new s,U=[];v.prototype[a.types.SPHERE|a.types.TRIMESH]=v.prototype.sphereTrimesh=function(le,oe,fe,me,Ze,Fe,Ee,Le){var ne=k,Re=N,Ie=W,Oe=Z,Pe=O,Te=I,T=q,V=z,$=M,B=U;h.pointToLocalFrame(me,Fe,fe,Pe);var J=le.radius;T.lowerBound.set(Pe.x-J,Pe.y-J,Pe.z-J),T.upperBound.set(Pe.x+J,Pe.y+J,Pe.z+J),oe.getTrianglesInAABB(T,B);for(var ve=E,Ue=le.radius*le.radius,Ce=0;Ce<B.length;Ce++)for(var Ne=0;Ne<3;Ne++)if(oe.getVertex(oe.indices[B[Ce]*3+Ne],ve),ve.vsub(Pe,$),$.norm2()<=Ue){V.copy(ve),h.pointToWorldFrame(me,Fe,V,ve),ve.vsub(fe,$);var we=this.createContactEquation(Ee,Le,le,oe);we.ni.copy($),we.ni.normalize(),we.ri.copy(we.ni),we.ri.scale(le.radius,we.ri),we.ri.vadd(fe,we.ri),we.ri.vsub(Ee.position,we.ri),we.rj.copy(ve),we.rj.vsub(Le.position,we.rj),this.result.push(we),this.createFrictionEquationsFromContact(we,this.frictionResult)}for(var Ce=0;Ce<B.length;Ce++)for(var Ne=0;Ne<3;Ne++){oe.getVertex(oe.indices[B[Ce]*3+Ne],ne),oe.getVertex(oe.indices[B[Ce]*3+(Ne+1)%3],Re),Re.vsub(ne,Ie),Pe.vsub(Re,Te);var Ye=Te.dot(Ie);Pe.vsub(ne,Te);var Ke=Te.dot(Ie);if(Ke>0&&Ye<0){Pe.vsub(ne,Te),Oe.copy(Ie),Oe.normalize(),Ke=Te.dot(Oe),Oe.scale(Ke,Te),Te.vadd(ne,Te);var ft=Te.distanceTo(Pe);if(ft<le.radius){var we=this.createContactEquation(Ee,Le,le,oe);Te.vsub(Pe,we.ni),we.ni.normalize(),we.ni.scale(le.radius,we.ri),h.pointToWorldFrame(me,Fe,Te,Te),Te.vsub(Le.position,we.rj),h.vectorToWorldFrame(Fe,we.ni,we.ni),h.vectorToWorldFrame(Fe,we.ri,we.ri),this.result.push(we),this.createFrictionEquationsFromContact(we,this.frictionResult)}}}for(var bt=j,vt=Y,lt=L,gt=K,Ce=0,Ge=B.length;Ce!==Ge;Ce++){oe.getTriangleVertices(B[Ce],bt,vt,lt),oe.getNormal(B[Ce],gt),Pe.vsub(bt,Te);var ft=Te.dot(gt);if(gt.scale(ft,Te),Pe.vsub(Te,Te),ft=Te.distanceTo(Pe),o.pointInTriangle(Te,bt,vt,lt)&&ft<le.radius){var we=this.createContactEquation(Ee,Le,le,oe);Te.vsub(Pe,we.ni),we.ni.normalize(),we.ni.scale(le.radius,we.ri),h.pointToWorldFrame(me,Fe,Te,Te),Te.vsub(Le.position,we.rj),h.vectorToWorldFrame(Fe,we.ni,we.ni),h.vectorToWorldFrame(Fe,we.ri,we.ri),this.result.push(we),this.createFrictionEquationsFromContact(we,this.frictionResult)}}B.length=0};var b=new l,A=new l;v.prototype[a.types.SPHERE|a.types.PLANE]=v.prototype.spherePlane=function(le,oe,fe,me,Ze,Fe,Ee,Le){var ne=this.createContactEquation(Ee,Le,le,oe);if(ne.ni.set(0,0,1),Fe.vmult(ne.ni,ne.ni),ne.ni.negate(ne.ni),ne.ni.normalize(),ne.ni.mult(le.radius,ne.ri),fe.vsub(me,b),ne.ni.mult(ne.ni.dot(b),A),b.vsub(A,ne.rj),-b.dot(ne.ni)<=le.radius){var Re=ne.ri,Ie=ne.rj;Re.vadd(fe,Re),Re.vsub(Ee.position,Re),Ie.vadd(me,Ie),Ie.vsub(Le.position,Ie),this.result.push(ne),this.createFrictionEquationsFromContact(ne,this.frictionResult)}};var G=new l,ie=new l,te=new l;function X(le,oe,fe){for(var me=null,Ze=le.length,Fe=0;Fe!==Ze;Fe++){var Ee=le[Fe],Le=G;le[(Fe+1)%Ze].vsub(Ee,Le);var ne=ie;Le.cross(oe,ne);var Re=te;fe.vsub(Ee,Re);var Ie=ne.dot(Re);if(me===null||Ie>0&&me===!0||Ie<=0&&me===!1){me===null&&(me=Ie>0);continue}else return!1}return!0}var se=new l,ce=new l,H=new l,Ae=new l,ue=[new l,new l,new l,new l,new l,new l],re=new l,ae=new l,We=new l,be=new l;v.prototype[a.types.SPHERE|a.types.BOX]=v.prototype.sphereBox=function(le,oe,fe,me,Ze,Fe,Ee,Le){var ne=this.v3pool,Re=ue;fe.vsub(me,se),oe.getSideNormals(Re,Fe);for(var Ie=le.radius,Oe=!1,Pe=ae,Te=We,T=be,V=null,$=0,B=0,J=0,ve=null,Ue=0,Ce=Re.length;Ue!==Ce&&Oe===!1;Ue++){var Ne=ce;Ne.copy(Re[Ue]);var we=Ne.norm();Ne.normalize();var Ye=se.dot(Ne);if(Ye<we+Ie&&Ye>0){var Ke=H,ft=Ae;Ke.copy(Re[(Ue+1)%3]),ft.copy(Re[(Ue+2)%3]);var bt=Ke.norm(),vt=ft.norm();Ke.normalize(),ft.normalize();var lt=se.dot(Ke),gt=se.dot(ft);if(lt<bt&&lt>-bt&&gt<vt&&gt>-vt){var Rt=Math.abs(Ye-we-Ie);(ve===null||Rt<ve)&&(ve=Rt,B=lt,J=gt,V=we,Pe.copy(Ne),Te.copy(Ke),T.copy(ft),$++)}}}if($){Oe=!0;var ke=this.createContactEquation(Ee,Le,le,oe);Pe.mult(-Ie,ke.ri),ke.ni.copy(Pe),ke.ni.negate(ke.ni),Pe.mult(V,Pe),Te.mult(B,Te),Pe.vadd(Te,Pe),T.mult(J,T),Pe.vadd(T,ke.rj),ke.ri.vadd(fe,ke.ri),ke.ri.vsub(Ee.position,ke.ri),ke.rj.vadd(me,ke.rj),ke.rj.vsub(Le.position,ke.rj),this.result.push(ke),this.createFrictionEquationsFromContact(ke,this.frictionResult)}for(var Ge=ne.get(),$t=re,ct=0;ct!==2&&!Oe;ct++)for(var Et=0;Et!==2&&!Oe;Et++)for(var Lt=0;Lt!==2&&!Oe;Lt++)if(Ge.set(0,0,0),ct?Ge.vadd(Re[0],Ge):Ge.vsub(Re[0],Ge),Et?Ge.vadd(Re[1],Ge):Ge.vsub(Re[1],Ge),Lt?Ge.vadd(Re[2],Ge):Ge.vsub(Re[2],Ge),me.vadd(Ge,$t),$t.vsub(fe,$t),$t.norm2()<Ie*Ie){Oe=!0;var ke=this.createContactEquation(Ee,Le,le,oe);ke.ri.copy($t),ke.ri.normalize(),ke.ni.copy(ke.ri),ke.ri.mult(Ie,ke.ri),ke.rj.copy(Ge),ke.ri.vadd(fe,ke.ri),ke.ri.vsub(Ee.position,ke.ri),ke.rj.vadd(me,ke.rj),ke.rj.vsub(Le.position,ke.rj),this.result.push(ke),this.createFrictionEquationsFromContact(ke,this.frictionResult)}ne.release(Ge),Ge=null;for(var Bt=ne.get(),Jt=ne.get(),ke=ne.get(),Pt=ne.get(),Rt=ne.get(),It=Re.length,ct=0;ct!==It&&!Oe;ct++)for(var Et=0;Et!==It&&!Oe;Et++)if(ct%3!==Et%3){Re[Et].cross(Re[ct],Bt),Bt.normalize(),Re[ct].vadd(Re[Et],Jt),ke.copy(fe),ke.vsub(Jt,ke),ke.vsub(me,ke);var cn=ke.dot(Bt);Bt.mult(cn,Pt);for(var Lt=0;Lt===ct%3||Lt===Et%3;)Lt++;Rt.copy(fe),Rt.vsub(Pt,Rt),Rt.vsub(Jt,Rt),Rt.vsub(me,Rt);var vs=Math.abs(cn),wr=Rt.norm();if(vs<Re[Lt].norm()&&wr<Ie){Oe=!0;var Tt=this.createContactEquation(Ee,Le,le,oe);Jt.vadd(Pt,Tt.rj),Tt.rj.copy(Tt.rj),Rt.negate(Tt.ni),Tt.ni.normalize(),Tt.ri.copy(Tt.rj),Tt.ri.vadd(me,Tt.ri),Tt.ri.vsub(fe,Tt.ri),Tt.ri.normalize(),Tt.ri.mult(Ie,Tt.ri),Tt.ri.vadd(fe,Tt.ri),Tt.ri.vsub(Ee.position,Tt.ri),Tt.rj.vadd(me,Tt.rj),Tt.rj.vsub(Le.position,Tt.rj),this.result.push(Tt),this.createFrictionEquationsFromContact(Tt,this.frictionResult)}}ne.release(Bt,Jt,ke,Pt,Rt)};var C=new l,S=new l,ee=new l,de=new l,he=new l,pe=new l,Me=new l,xe=new l,ye=new l,ze=new l;v.prototype[a.types.SPHERE|a.types.CONVEXPOLYHEDRON]=v.prototype.sphereConvex=function(le,oe,fe,me,Ze,Fe,Ee,Le){var ne=this.v3pool;fe.vsub(me,C);for(var Re=oe.faceNormals,Ie=oe.faces,Oe=oe.vertices,Pe=le.radius,Te=0;Te!==Oe.length;Te++){var T=Oe[Te],V=he;Fe.vmult(T,V),me.vadd(V,V);var $=de;if(V.vsub(fe,$),$.norm2()<Pe*Pe){J=!0;var B=this.createContactEquation(Ee,Le,le,oe);B.ri.copy($),B.ri.normalize(),B.ni.copy(B.ri),B.ri.mult(Pe,B.ri),V.vsub(me,B.rj),B.ri.vadd(fe,B.ri),B.ri.vsub(Ee.position,B.ri),B.rj.vadd(me,B.rj),B.rj.vsub(Le.position,B.rj),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult);return}}for(var J=!1,Te=0,ve=Ie.length;Te!==ve&&J===!1;Te++){var Ue=Re[Te],Ce=Ie[Te],Ne=pe;Fe.vmult(Ue,Ne);var we=Me;Fe.vmult(Oe[Ce[0]],we),we.vadd(me,we);var Ye=xe;Ne.mult(-Pe,Ye),fe.vadd(Ye,Ye);var Ke=ye;Ye.vsub(we,Ke);var ft=Ke.dot(Ne),bt=ze;if(fe.vsub(we,bt),ft<0&&bt.dot(Ne)>0){for(var vt=[],lt=0,gt=Ce.length;lt!==gt;lt++){var Ge=ne.get();Fe.vmult(Oe[Ce[lt]],Ge),me.vadd(Ge,Ge),vt.push(Ge)}if(X(vt,Ne,fe)){J=!0;var B=this.createContactEquation(Ee,Le,le,oe);Ne.mult(-Pe,B.ri),Ne.negate(B.ni);var $t=ne.get();Ne.mult(-ft,$t);var ct=ne.get();Ne.mult(-Pe,ct),fe.vsub(me,B.rj),B.rj.vadd(ct,B.rj),B.rj.vadd($t,B.rj),B.rj.vadd(me,B.rj),B.rj.vsub(Le.position,B.rj),B.ri.vadd(fe,B.ri),B.ri.vsub(Ee.position,B.ri),ne.release($t),ne.release(ct),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult);for(var lt=0,Et=vt.length;lt!==Et;lt++)ne.release(vt[lt]);return}else for(var lt=0;lt!==Ce.length;lt++){var Lt=ne.get(),Bt=ne.get();Fe.vmult(Oe[Ce[(lt+1)%Ce.length]],Lt),Fe.vmult(Oe[Ce[(lt+2)%Ce.length]],Bt),me.vadd(Lt,Lt),me.vadd(Bt,Bt);var Jt=S;Bt.vsub(Lt,Jt);var ke=ee;Jt.unit(ke);var Pt=ne.get(),Rt=ne.get();fe.vsub(Lt,Rt);var It=Rt.dot(ke);ke.mult(It,Pt),Pt.vadd(Lt,Pt);var cn=ne.get();if(Pt.vsub(fe,cn),It>0&&It*It<Jt.norm2()&&cn.norm2()<Pe*Pe){var B=this.createContactEquation(Ee,Le,le,oe);Pt.vsub(me,B.rj),Pt.vsub(fe,B.ni),B.ni.normalize(),B.ni.mult(Pe,B.ri),B.rj.vadd(me,B.rj),B.rj.vsub(Le.position,B.rj),B.ri.vadd(fe,B.ri),B.ri.vsub(Ee.position,B.ri),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult);for(var lt=0,Et=vt.length;lt!==Et;lt++)ne.release(vt[lt]);ne.release(Lt),ne.release(Bt),ne.release(Pt),ne.release(cn),ne.release(Rt);return}ne.release(Lt),ne.release(Bt),ne.release(Pt),ne.release(cn),ne.release(Rt)}for(var lt=0,Et=vt.length;lt!==Et;lt++)ne.release(vt[lt])}}},new l,new l,v.prototype[a.types.PLANE|a.types.BOX]=v.prototype.planeBox=function(le,oe,fe,me,Ze,Fe,Ee,Le){oe.convexPolyhedronRepresentation.material=oe.material,oe.convexPolyhedronRepresentation.collisionResponse=oe.collisionResponse,this.planeConvex(le,oe.convexPolyhedronRepresentation,fe,me,Ze,Fe,Ee,Le)};var je=new l,ge=new l,at=new l,Qe=new l;v.prototype[a.types.PLANE|a.types.CONVEXPOLYHEDRON]=v.prototype.planeConvex=function(le,oe,fe,me,Ze,Fe,Ee,Le){var ne=je,Re=ge;Re.set(0,0,1),Ze.vmult(Re,Re);for(var Ie=0,Oe=at,Pe=0;Pe!==oe.vertices.length;Pe++){ne.copy(oe.vertices[Pe]),Fe.vmult(ne,ne),me.vadd(ne,ne),ne.vsub(fe,Oe);var Te=Re.dot(Oe);if(Te<=0){var T=this.createContactEquation(Ee,Le,le,oe),V=Qe;Re.mult(Re.dot(Oe),V),ne.vsub(V,V),V.vsub(fe,T.ri),T.ni.copy(Re),ne.vsub(me,T.rj),T.ri.vadd(fe,T.ri),T.ri.vsub(Ee.position,T.ri),T.rj.vadd(me,T.rj),T.rj.vsub(Le.position,T.rj),this.result.push(T),Ie++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(T,this.frictionResult)}}this.enableFrictionReduction&&Ie&&this.createFrictionFromAverage(Ie)};var qe=new l,He=new l;v.prototype[a.types.CONVEXPOLYHEDRON]=v.prototype.convexConvex=function(le,oe,fe,me,Ze,Fe,Ee,Le,ne,Re,Ie,Oe){var Pe=qe;if(!(fe.distanceTo(me)>le.boundingSphereRadius+oe.boundingSphereRadius)&&le.findSeparatingAxis(oe,fe,Ze,me,Fe,Pe,Ie,Oe)){var Te=[],T=He;le.clipAgainstHull(fe,Ze,oe,me,Fe,Pe,-100,100,Te);for(var V=0,$=0;$!==Te.length;$++){var B=this.createContactEquation(Ee,Le,le,oe,ne,Re),J=B.ri,ve=B.rj;Pe.negate(B.ni),Te[$].normal.negate(T),T.mult(Te[$].depth,T),Te[$].point.vadd(T,J),ve.copy(Te[$].point),J.vsub(fe,J),ve.vsub(me,ve),J.vadd(fe,J),J.vsub(Ee.position,J),ve.vadd(me,ve),ve.vsub(Le.position,ve),this.result.push(B),V++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(B,this.frictionResult)}this.enableFrictionReduction&&V&&this.createFrictionFromAverage(V)}};var Be=new l,Je=new l,tt=new l;v.prototype[a.types.PLANE|a.types.PARTICLE]=v.prototype.planeParticle=function(le,oe,fe,me,Ze,Fe,Ee,Le){var ne=Be;ne.set(0,0,1),Ee.quaternion.vmult(ne,ne);var Re=Je;me.vsub(Ee.position,Re);var Ie=ne.dot(Re);if(Ie<=0){var Oe=this.createContactEquation(Le,Ee,oe,le);Oe.ni.copy(ne),Oe.ni.negate(Oe.ni),Oe.ri.set(0,0,0);var Pe=tt;ne.mult(ne.dot(me),Pe),me.vsub(Pe,Pe),Oe.rj.copy(Pe),this.result.push(Oe),this.createFrictionEquationsFromContact(Oe,this.frictionResult)}};var ot=new l;v.prototype[a.types.PARTICLE|a.types.SPHERE]=v.prototype.sphereParticle=function(le,oe,fe,me,Ze,Fe,Ee,Le){var ne=ot;ne.set(0,0,1),me.vsub(fe,ne);var Re=ne.norm2();if(Re<=le.radius*le.radius){var Ie=this.createContactEquation(Le,Ee,oe,le);ne.normalize(),Ie.rj.copy(ne),Ie.rj.mult(le.radius,Ie.rj),Ie.ni.copy(ne),Ie.ni.negate(Ie.ni),Ie.ri.set(0,0,0),this.result.push(Ie),this.createFrictionEquationsFromContact(Ie,this.frictionResult)}};var $e=new u,it=new l;new l;var D=new l,_e=new l,Se=new l;v.prototype[a.types.PARTICLE|a.types.CONVEXPOLYHEDRON]=v.prototype.convexParticle=function(le,oe,fe,me,Ze,Fe,Ee,Le){var ne=-1,Re=D,Ie=Se,Oe=null,Pe=it;if(Pe.copy(me),Pe.vsub(fe,Pe),Ze.conjugate($e),$e.vmult(Pe,Pe),le.pointIsInside(Pe)){le.worldVerticesNeedsUpdate&&le.computeWorldVertices(fe,Ze),le.worldFaceNormalsNeedsUpdate&&le.computeWorldFaceNormals(Ze);for(var Te=0,T=le.faces.length;Te!==T;Te++){var V=[le.worldVertices[le.faces[Te][0]]],$=le.worldFaceNormals[Te];me.vsub(V[0],_e);var B=-$.dot(_e);(Oe===null||Math.abs(B)<Math.abs(Oe))&&(Oe=B,ne=Te,Re.copy($))}if(ne!==-1){var J=this.createContactEquation(Le,Ee,oe,le);Re.mult(Oe,Ie),Ie.vadd(me,Ie),Ie.vsub(fe,Ie),J.rj.copy(Ie),Re.negate(J.ni),J.ri.set(0,0,0);var ve=J.ri,Ue=J.rj;ve.vadd(me,ve),ve.vsub(Le.position,ve),Ue.vadd(fe,Ue),Ue.vsub(Ee.position,Ue),this.result.push(J),this.createFrictionEquationsFromContact(J,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}},v.prototype[a.types.BOX|a.types.HEIGHTFIELD]=v.prototype.boxHeightfield=function(le,oe,fe,me,Ze,Fe,Ee,Le){le.convexPolyhedronRepresentation.material=le.material,le.convexPolyhedronRepresentation.collisionResponse=le.collisionResponse,this.convexHeightfield(le.convexPolyhedronRepresentation,oe,fe,me,Ze,Fe,Ee,Le)};var Ve=new l,Xe=new l,ut=[0];v.prototype[a.types.CONVEXPOLYHEDRON|a.types.HEIGHTFIELD]=v.prototype.convexHeightfield=function(le,oe,fe,me,Ze,Fe,Ee,Le){var ne=oe.data,Re=oe.elementSize,Ie=le.boundingSphereRadius,Oe=Xe,Pe=ut,Te=Ve;h.pointToLocalFrame(me,Fe,fe,Te);var T=Math.floor((Te.x-Ie)/Re)-1,V=Math.ceil((Te.x+Ie)/Re)+1,$=Math.floor((Te.y-Ie)/Re)-1,B=Math.ceil((Te.y+Ie)/Re)+1;if(!(V<0||B<0||T>ne.length||$>ne[0].length)){T<0&&(T=0),V<0&&(V=0),$<0&&($=0),B<0&&(B=0),T>=ne.length&&(T=ne.length-1),V>=ne.length&&(V=ne.length-1),B>=ne[0].length&&(B=ne[0].length-1),$>=ne[0].length&&($=ne[0].length-1);var J=[];oe.getRectMinMax(T,$,V,B,J);var ve=J[0],Ue=J[1];if(!(Te.z-Ie>Ue||Te.z+Ie<ve))for(var Ce=T;Ce<V;Ce++)for(var Ne=$;Ne<B;Ne++)oe.getConvexTrianglePillar(Ce,Ne,!1),h.pointToWorldFrame(me,Fe,oe.pillarOffset,Oe),fe.distanceTo(Oe)<oe.pillarConvex.boundingSphereRadius+le.boundingSphereRadius&&this.convexConvex(le,oe.pillarConvex,fe,Oe,Ze,Fe,Ee,Le,null,null,Pe,null),oe.getConvexTrianglePillar(Ce,Ne,!0),h.pointToWorldFrame(me,Fe,oe.pillarOffset,Oe),fe.distanceTo(Oe)<oe.pillarConvex.boundingSphereRadius+le.boundingSphereRadius&&this.convexConvex(le,oe.pillarConvex,fe,Oe,Ze,Fe,Ee,Le,null,null,Pe,null)}};var mt=new l,dt=new l;v.prototype[a.types.SPHERE|a.types.HEIGHTFIELD]=v.prototype.sphereHeightfield=function(le,oe,fe,me,Ze,Fe,Ee,Le){var ne=oe.data,Re=le.radius,Ie=oe.elementSize,Oe=dt,Pe=mt;h.pointToLocalFrame(me,Fe,fe,Pe);var Te=Math.floor((Pe.x-Re)/Ie)-1,T=Math.ceil((Pe.x+Re)/Ie)+1,V=Math.floor((Pe.y-Re)/Ie)-1,$=Math.ceil((Pe.y+Re)/Ie)+1;if(!(T<0||$<0||Te>ne.length||$>ne[0].length)){Te<0&&(Te=0),T<0&&(T=0),V<0&&(V=0),$<0&&($=0),Te>=ne.length&&(Te=ne.length-1),T>=ne.length&&(T=ne.length-1),$>=ne[0].length&&($=ne[0].length-1),V>=ne[0].length&&(V=ne[0].length-1);var B=[];oe.getRectMinMax(Te,V,T,$,B);var J=B[0],ve=B[1];if(!(Pe.z-Re>ve||Pe.z+Re<J))for(var Ue=this.result,Ce=Te;Ce<T;Ce++)for(var Ne=V;Ne<$;Ne++){var we=Ue.length;oe.getConvexTrianglePillar(Ce,Ne,!1),h.pointToWorldFrame(me,Fe,oe.pillarOffset,Oe),fe.distanceTo(Oe)<oe.pillarConvex.boundingSphereRadius+le.boundingSphereRadius&&this.sphereConvex(le,oe.pillarConvex,fe,Oe,Ze,Fe,Ee,Le),oe.getConvexTrianglePillar(Ce,Ne,!0),h.pointToWorldFrame(me,Fe,oe.pillarOffset,Oe),fe.distanceTo(Oe)<oe.pillarConvex.boundingSphereRadius+le.boundingSphereRadius&&this.sphereConvex(le,oe.pillarConvex,fe,Oe,Ze,Fe,Ee,Le);var Ye=Ue.length-we;if(Ye>2)return}}}},{"../collision/AABB":3,"../collision/Ray":9,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43,"../solver/Solver":47,"../utils/Vec3Pool":54}],56:[function(t,n,r){n.exports=x;var s=t("../shapes/Shape"),a=t("../math/Vec3"),o=t("../math/Quaternion"),l=t("../solver/GSSolver");t("../utils/Vec3Pool"),t("../equations/ContactEquation"),t("../equations/FrictionEquation");var h=t("./Narrowphase"),u=t("../utils/EventTarget"),c=t("../collision/ArrayCollisionMatrix"),d=t("../material/Material"),f=t("../material/ContactMaterial"),v=t("../objects/Body"),g=t("../utils/TupleDictionary"),p=t("../collision/RaycastResult"),m=t("../collision/AABB"),_=t("../collision/Ray"),y=t("../collision/NaiveBroadphase");function x(){u.apply(this),this.dt=-1,this.allowSleep=!1,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=0,this.quatNormalizeFast=!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new a,this.broadphase=new y,this.bodies=[],this.solver=new l,this.constraints=[],this.narrowphase=new h(this),this.collisionMatrix=new c,this.collisionMatrixPrevious=new c,this.materials=[],this.contactmaterials=[],this.contactMaterialTable=new g,this.defaultMaterial=new d("default"),this.defaultContactMaterial=new f(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null}}x.prototype=new u,new m;var w=new _;if(x.prototype.getContactMaterial=function(I,j){return this.contactMaterialTable.get(I.id,j.id)},x.prototype.numObjects=function(){return this.bodies.length},x.prototype.collisionMatrixTick=function(){var I=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=I,this.collisionMatrix.reset()},x.prototype.add=x.prototype.addBody=function(I){this.bodies.indexOf(I)===-1&&(I.index=this.bodies.length,this.bodies.push(I),I.world=this,I.initPosition.copy(I.position),I.initVelocity.copy(I.velocity),I.timeLastSleepy=this.time,I instanceof v&&(I.initAngularVelocity.copy(I.angularVelocity),I.initQuaternion.copy(I.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=I,this.dispatchEvent(this.addBodyEvent))},x.prototype.addConstraint=function(I){this.constraints.push(I)},x.prototype.removeConstraint=function(I){var j=this.constraints.indexOf(I);j!==-1&&this.constraints.splice(j,1)},x.prototype.rayTest=function(I,j,Y){Y instanceof p?this.raycastClosest(I,j,{skipBackfaces:!0},Y):this.raycastAll(I,j,{skipBackfaces:!0},Y)},x.prototype.raycastAll=function(I,j,Y,L){return Y.mode=_.ALL,Y.from=I,Y.to=j,Y.callback=L,w.intersectWorld(this,Y)},x.prototype.raycastAny=function(I,j,Y,L){return Y.mode=_.ANY,Y.from=I,Y.to=j,Y.result=L,w.intersectWorld(this,Y)},x.prototype.raycastClosest=function(I,j,Y,L){return Y.mode=_.CLOSEST,Y.from=I,Y.to=j,Y.result=L,w.intersectWorld(this,Y)},x.prototype.remove=function(I){I.world=null;var j=this.bodies.length-1,Y=this.bodies,L=Y.indexOf(I);if(L!==-1){Y.splice(L,1);for(var q=0;q!==Y.length;q++)Y[q].index=q;this.collisionMatrix.setNumObjects(j),this.removeBodyEvent.body=I,this.dispatchEvent(this.removeBodyEvent)}},x.prototype.removeBody=x.prototype.remove,x.prototype.addMaterial=function(I){this.materials.push(I)},x.prototype.addContactMaterial=function(I){this.contactmaterials.push(I),this.contactMaterialTable.set(I.materials[0].id,I.materials[1].id,I)},typeof performance>"u"&&(performance={}),!performance.now){var R=Date.now();performance.timing&&performance.timing.navigationStart&&(R=performance.timing.navigationStart),performance.now=function(){return Date.now()-R}}var P=new a;x.prototype.step=function(I,j,Y){if(Y=Y||10,j=j||0,j===0)this.internalStep(I),this.time+=I;else{var L=Math.floor((this.time+j)/I)-Math.floor(this.time/I);L=Math.min(L,Y);for(var q=performance.now(),U=0;U!==L&&(this.internalStep(I),!(performance.now()-q>I*1e3));U++);this.time+=j;for(var b=this.time%I,A=b/I,G=P,ie=this.bodies,te=0;te!==ie.length;te++){var X=ie[te];X.type!==v.STATIC&&X.sleepState!==v.SLEEPING?(X.position.vsub(X.previousPosition,G),G.scale(A,G),X.position.vadd(G,X.interpolatedPosition)):(X.interpolatedPosition.copy(X.position),X.interpolatedQuaternion.copy(X.quaternion))}}};var F={type:"postStep"},K={type:"preStep"},M={type:"collide",body:null,contact:null},E=[],z=[],k=[],N=[];new a,new a,new a,new a,new a,new a,new a,new a,new a,new o;var W=new o,Z=new o,O=new a;x.prototype.internalStep=function(I){this.dt=I;var j=this.contacts,Y=k,L=N,q=this.numObjects(),U=this.bodies,b=this.solver,A=this.gravity,G=this.doProfiling,ie=this.profile,te=v.DYNAMIC,X,se=this.constraints,ce=z;A.norm();var H=A.x,Ae=A.y,ue=A.z,re=0;for(G&&(X=performance.now()),re=0;re!==q;re++){var ae=U[re];if(ae.type&te){var We=ae.force,be=ae.mass;We.x+=be*H,We.y+=be*Ae,We.z+=be*ue}}for(var re=0,C=this.subsystems.length;re!==C;re++)this.subsystems[re].update();G&&(X=performance.now()),Y.length=0,L.length=0,this.broadphase.collisionPairs(this,Y,L),G&&(ie.broadphase=performance.now()-X);var qe=se.length;for(re=0;re!==qe;re++){var S=se[re];if(!S.collideConnected)for(var ee=Y.length-1;ee>=0;ee-=1)(S.bodyA===Y[ee]&&S.bodyB===L[ee]||S.bodyB===Y[ee]&&S.bodyA===L[ee])&&(Y.splice(ee,1),L.splice(ee,1))}this.collisionMatrixTick(),G&&(X=performance.now());var de=E,he=j.length;for(re=0;re!==he;re++)de.push(j[re]);j.length=0;var pe=this.frictionEquations.length;for(re=0;re!==pe;re++)ce.push(this.frictionEquations[re]);this.frictionEquations.length=0,this.narrowphase.getContacts(Y,L,this,j,de,this.frictionEquations,ce),G&&(ie.narrowphase=performance.now()-X),G&&(X=performance.now());for(var re=0;re<this.frictionEquations.length;re++)b.addEquation(this.frictionEquations[re]);for(var Me=j.length,xe=0;xe!==Me;xe++){var S=j[xe],ae=S.bi,ye=S.bj;S.si,S.sj;var ze;if(ae.material&&ye.material?ze=this.getContactMaterial(ae.material,ye.material)||this.defaultContactMaterial:ze=this.defaultContactMaterial,ze.friction,ae.material&&ye.material&&(ae.material.friction>=0&&ye.material.friction>=0&&ae.material.friction*ye.material.friction,ae.material.restitution>=0&&ye.material.restitution>=0&&(S.restitution=ae.material.restitution*ye.material.restitution)),b.addEquation(S),ae.allowSleep&&ae.type===v.DYNAMIC&&ae.sleepState===v.SLEEPING&&ye.sleepState===v.AWAKE&&ye.type!==v.STATIC){var je=ye.velocity.norm2()+ye.angularVelocity.norm2(),ge=Math.pow(ye.sleepSpeedLimit,2);je>=ge*2&&(ae._wakeUpAfterNarrowphase=!0)}if(ye.allowSleep&&ye.type===v.DYNAMIC&&ye.sleepState===v.SLEEPING&&ae.sleepState===v.AWAKE&&ae.type!==v.STATIC){var at=ae.velocity.norm2()+ae.angularVelocity.norm2(),Qe=Math.pow(ae.sleepSpeedLimit,2);at>=Qe*2&&(ye._wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(ae,ye,!0),this.collisionMatrixPrevious.get(ae,ye)||(M.body=ye,M.contact=S,ae.dispatchEvent(M),M.body=ae,ye.dispatchEvent(M))}for(G&&(ie.makeContactConstraints=performance.now()-X,X=performance.now()),re=0;re!==q;re++){var ae=U[re];ae._wakeUpAfterNarrowphase&&(ae.wakeUp(),ae._wakeUpAfterNarrowphase=!1)}var qe=se.length;for(re=0;re!==qe;re++){var S=se[re];S.update();for(var ee=0,He=S.equations.length;ee!==He;ee++){var Be=S.equations[ee];b.addEquation(Be)}}b.solve(I,this),G&&(ie.solve=performance.now()-X),b.removeAllEquations();var Je=Math.pow;for(re=0;re!==q;re++){var ae=U[re];if(ae.type&te){var tt=Je(1-ae.linearDamping,I),ot=ae.velocity;ot.mult(tt,ot);var $e=ae.angularVelocity;if($e){var it=Je(1-ae.angularDamping,I);$e.mult(it,$e)}}}for(this.dispatchEvent(K),re=0;re!==q;re++){var ae=U[re];ae.preStep&&ae.preStep.call(ae)}G&&(X=performance.now());var D=W,_e=Z,Se=this.stepnumber,Ve=v.DYNAMIC|v.KINEMATIC,Xe=Se%(this.quatNormalizeSkip+1)===0,ut=this.quatNormalizeFast,mt=I*.5;for(s.types.PLANE,s.types.CONVEXPOLYHEDRON,re=0;re!==q;re++){var dt=U[re],le=dt.force,oe=dt.torque;if(dt.type&Ve&&dt.sleepState!==v.SLEEPING){var fe=dt.velocity,me=dt.angularVelocity,Ze=dt.position,Fe=dt.quaternion,Ee=dt.invMass,Le=dt.invInertiaWorld;fe.x+=le.x*Ee*I,fe.y+=le.y*Ee*I,fe.z+=le.z*Ee*I,dt.angularVelocity&&(Le.vmult(oe,O),O.mult(I,O),O.vadd(me,me)),Ze.x+=fe.x*I,Ze.y+=fe.y*I,Ze.z+=fe.z*I,dt.angularVelocity&&(D.set(me.x,me.y,me.z,0),D.mult(Fe,_e),Fe.x+=mt*_e.x,Fe.y+=mt*_e.y,Fe.z+=mt*_e.z,Fe.w+=mt*_e.w,Xe&&(ut?Fe.normalizeFast():Fe.normalize())),dt.aabb&&(dt.aabbNeedsUpdate=!0),dt.updateInertiaWorld&&dt.updateInertiaWorld()}}for(this.clearForces(),this.broadphase.dirty=!0,G&&(ie.integrate=performance.now()-X),this.time+=I,this.stepnumber+=1,this.dispatchEvent(F),re=0;re!==q;re++){var ae=U[re],ne=ae.postStep;ne&&ne.call(ae)}if(this.allowSleep)for(re=0;re!==q;re++)U[re].sleepTick(this.time)},x.prototype.clearForces=function(){for(var I=this.bodies,j=I.length,Y=0;Y!==j;Y++){var L=I[Y];L.force,L.torque,L.force.set(0,0,0),L.torque.set(0,0,0)}}},{"../collision/AABB":3,"../collision/ArrayCollisionMatrix":4,"../collision/NaiveBroadphase":7,"../collision/Ray":9,"../collision/RaycastResult":10,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../material/ContactMaterial":24,"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Shape":43,"../solver/GSSolver":46,"../utils/EventTarget":49,"../utils/TupleDictionary":52,"../utils/Vec3Pool":54,"./Narrowphase":55}]},{},[2])(2)})})(Tc);var vi=Tc.exports,_r=Object.freeze({Linear:Object.freeze({None:function(i){return i},In:function(i){return this.None(i)},Out:function(i){return this.None(i)},InOut:function(i){return this.None(i)}}),Quadratic:Object.freeze({In:function(i){return i*i},Out:function(i){return i*(2-i)},InOut:function(i){return(i*=2)<1?.5*i*i:-.5*(--i*(i-2)-1)}}),Cubic:Object.freeze({In:function(i){return i*i*i},Out:function(i){return--i*i*i+1},InOut:function(i){return(i*=2)<1?.5*i*i*i:.5*((i-=2)*i*i+2)}}),Quartic:Object.freeze({In:function(i){return i*i*i*i},Out:function(i){return 1- --i*i*i*i},InOut:function(i){return(i*=2)<1?.5*i*i*i*i:-.5*((i-=2)*i*i*i-2)}}),Quintic:Object.freeze({In:function(i){return i*i*i*i*i},Out:function(i){return--i*i*i*i*i+1},InOut:function(i){return(i*=2)<1?.5*i*i*i*i*i:.5*((i-=2)*i*i*i*i+2)}}),Sinusoidal:Object.freeze({In:function(i){return 1-Math.sin((1-i)*Math.PI/2)},Out:function(i){return Math.sin(i*Math.PI/2)},InOut:function(i){return .5*(1-Math.sin(Math.PI*(.5-i)))}}),Exponential:Object.freeze({In:function(i){return i===0?0:Math.pow(1024,i-1)},Out:function(i){return i===1?1:1-Math.pow(2,-10*i)},InOut:function(i){return i===0?0:i===1?1:(i*=2)<1?.5*Math.pow(1024,i-1):.5*(-Math.pow(2,-10*(i-1))+2)}}),Circular:Object.freeze({In:function(i){return 1-Math.sqrt(1-i*i)},Out:function(i){return Math.sqrt(1- --i*i)},InOut:function(i){return(i*=2)<1?-.5*(Math.sqrt(1-i*i)-1):.5*(Math.sqrt(1-(i-=2)*i)+1)}}),Elastic:Object.freeze({In:function(i){return i===0?0:i===1?1:-Math.pow(2,10*(i-1))*Math.sin((i-1.1)*5*Math.PI)},Out:function(i){return i===0?0:i===1?1:Math.pow(2,-10*i)*Math.sin((i-.1)*5*Math.PI)+1},InOut:function(i){return i===0?0:i===1?1:(i*=2,i<1?-.5*Math.pow(2,10*(i-1))*Math.sin((i-1.1)*5*Math.PI):.5*Math.pow(2,-10*(i-1))*Math.sin((i-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(i){var e=1.70158;return i===1?1:i*i*((e+1)*i-e)},Out:function(i){var e=1.70158;return i===0?0:--i*i*((e+1)*i+e)+1},InOut:function(i){var e=2.5949095;return(i*=2)<1?.5*(i*i*((e+1)*i-e)):.5*((i-=2)*i*((e+1)*i+e)+2)}}),Bounce:Object.freeze({In:function(i){return 1-_r.Bounce.Out(1-i)},Out:function(i){return i<1/2.75?7.5625*i*i:i<2/2.75?7.5625*(i-=1.5/2.75)*i+.75:i<2.5/2.75?7.5625*(i-=2.25/2.75)*i+.9375:7.5625*(i-=2.625/2.75)*i+.984375},InOut:function(i){return i<.5?_r.Bounce.In(i*2)*.5:_r.Bounce.Out(i*2-1)*.5+.5}}),generatePow:function(i){return i===void 0&&(i=4),i=i<Number.EPSILON?Number.EPSILON:i,i=i>1e4?1e4:i,{In:function(e){return Math.pow(e,i)},Out:function(e){return 1-Math.pow(1-e,i)},InOut:function(e){return e<.5?Math.pow(e*2,i)/2:(1-Math.pow(2-e*2,i))/2+.5}}}}),pr=function(){return performance.now()},qv=function(){function i(){this._tweens={},this._tweensAddedDuringUpdate={}}return i.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},i.prototype.removeAll=function(){this._tweens={}},i.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},i.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},i.prototype.update=function(e,t){e===void 0&&(e=pr()),t===void 0&&(t=!1);var n=Object.keys(this._tweens);if(n.length===0)return!1;for(;n.length>0;){this._tweensAddedDuringUpdate={};for(var r=0;r<n.length;r++){var s=this._tweens[n[r]],a=!t;s&&s.update(e,a)===!1&&!t&&delete this._tweens[n[r]]}n=Object.keys(this._tweensAddedDuringUpdate)}return!0},i}(),Hi={Linear:function(i,e){var t=i.length-1,n=t*e,r=Math.floor(n),s=Hi.Utils.Linear;return e<0?s(i[0],i[1],n):e>1?s(i[t],i[t-1],t-n):s(i[r],i[r+1>t?t:r+1],n-r)},Bezier:function(i,e){for(var t=0,n=i.length-1,r=Math.pow,s=Hi.Utils.Bernstein,a=0;a<=n;a++)t+=r(1-e,n-a)*r(e,a)*i[a]*s(n,a);return t},CatmullRom:function(i,e){var t=i.length-1,n=t*e,r=Math.floor(n),s=Hi.Utils.CatmullRom;return i[0]===i[t]?(e<0&&(r=Math.floor(n=t*(1+e))),s(i[(r-1+t)%t],i[r],i[(r+1)%t],i[(r+2)%t],n-r)):e<0?i[0]-(s(i[0],i[0],i[1],i[1],-n)-i[0]):e>1?i[t]-(s(i[t],i[t],i[t-1],i[t-1],n-t)-i[t]):s(i[r?r-1:0],i[r],i[t<r+1?t:r+1],i[t<r+2?t:r+2],n-r)},Utils:{Linear:function(i,e,t){return(e-i)*t+i},Bernstein:function(i,e){var t=Hi.Utils.Factorial;return t(i)/t(e)/t(i-e)},Factorial:function(){var i=[1];return function(e){var t=1;if(i[e])return i[e];for(var n=e;n>1;n--)t*=n;return i[e]=t,t}}(),CatmullRom:function(i,e,t,n,r){var s=(t-i)*.5,a=(n-e)*.5,o=r*r,l=r*o;return(2*e-2*t+s+a)*l+(-3*e+3*t-2*s-a)*o+s*r+e}}},Yv=function(){function i(){}return i.nextId=function(){return i._nextId++},i._nextId=0,i}(),ma=new qv,wc=function(){function i(e,t){t===void 0&&(t=ma),this._object=e,this._group=t,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=_r.Linear.None,this._interpolationFunction=Hi.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=Yv.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return i.prototype.getId=function(){return this._id},i.prototype.isPlaying=function(){return this._isPlaying},i.prototype.isPaused=function(){return this._isPaused},i.prototype.getDuration=function(){return this._duration},i.prototype.to=function(e,t){if(t===void 0&&(t=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=t<0?0:t,this},i.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e<0?0:e,this},i.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},i.prototype.start=function(e,t){if(e===void 0&&(e=pr()),t===void 0&&(t=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var n in this._valuesStartRepeat)this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||t){if(this._propertiesAreSetUp=!0,!this._isDynamic){var r={};for(var s in this._valuesEnd)r[s]=this._valuesEnd[s];this._valuesEnd=r}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,t)}return this},i.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},i.prototype._setupProperties=function(e,t,n,r,s){for(var a in n){var o=e[a],l=Array.isArray(o),h=l?"array":typeof o,u=!l&&Array.isArray(n[a]);if(!(h==="undefined"||h==="function")){if(u){var c=n[a];if(c.length===0)continue;for(var d=[o],f=0,v=c.length;f<v;f+=1){var g=this._handleRelativeValue(o,c[f]);if(isNaN(g)){u=!1,console.warn("Found invalid interpolation list. Skipping.");break}d.push(g)}u&&(n[a]=d)}if((h==="object"||l)&&o&&!u){t[a]=l?[]:{};var p=o;for(var m in p)t[a][m]=p[m];r[a]=l?[]:{};var c=n[a];if(!this._isDynamic){var _={};for(var m in c)_[m]=c[m];n[a]=c=_}this._setupProperties(p,t[a],c,r[a],s)}else(typeof t[a]>"u"||s)&&(t[a]=o),l||(t[a]*=1),u?r[a]=n[a].slice().reverse():r[a]=t[a]||0}}},i.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},i.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},i.prototype.pause=function(e){return e===void 0&&(e=pr()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},i.prototype.resume=function(e){return e===void 0&&(e=pr()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},i.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},i.prototype.group=function(e){return e===void 0&&(e=ma),this._group=e,this},i.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},i.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},i.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},i.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},i.prototype.easing=function(e){return e===void 0&&(e=_r.Linear.None),this._easingFunction=e,this},i.prototype.interpolation=function(e){return e===void 0&&(e=Hi.Linear),this._interpolationFunction=e,this},i.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},i.prototype.onStart=function(e){return this._onStartCallback=e,this},i.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},i.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},i.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},i.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},i.prototype.onStop=function(e){return this._onStopCallback=e,this},i.prototype.update=function(e,t){var n=this,r;if(e===void 0&&(e=pr()),t===void 0&&(t=!0),this._isPaused)return!0;var s,a=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>a)return!1;t&&this.start(e,!0)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var o=e-this._startTime,l=this._duration+((r=this._repeatDelayTime)!==null&&r!==void 0?r:this._delayTime),h=this._duration+this._repeat*l,u=function(){if(n._duration===0||o>h)return 1;var p=Math.trunc(o/l),m=o-p*l,_=Math.min(m/n._duration,1);return _===0&&o===n._duration?1:_},c=u(),d=this._easingFunction(c);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,d),this._onUpdateCallback&&this._onUpdateCallback(this._object,c),this._duration===0||o>=this._duration)if(this._repeat>0){var f=Math.min(Math.trunc((o-this._duration)/l)+1,this._repeat);isFinite(this._repeat)&&(this._repeat-=f);for(s in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[s]=="string"&&(this._valuesStartRepeat[s]=this._valuesStartRepeat[s]+parseFloat(this._valuesEnd[s])),this._yoyo&&this._swapEndStartRepeatValues(s),this._valuesStart[s]=this._valuesStartRepeat[s];return this._yoyo&&(this._reversed=!this._reversed),this._startTime+=l*f,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var v=0,g=this._chainedTweens.length;v<g;v++)this._chainedTweens[v].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},i.prototype._updateProperties=function(e,t,n,r){for(var s in n)if(t[s]!==void 0){var a=t[s]||0,o=n[s],l=Array.isArray(e[s]),h=Array.isArray(o),u=!l&&h;u?e[s]=this._interpolationFunction(o,r):typeof o=="object"&&o?this._updateProperties(e[s],a,o,r):(o=this._handleRelativeValue(a,o),typeof o=="number"&&(e[s]=a+(o-a)*r))}},i.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},i.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],n=this._valuesEnd[e];typeof n=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(n):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},i}(),En=ma;En.getAll.bind(En);En.removeAll.bind(En);En.add.bind(En);En.remove.bind(En);var jv=En.update.bind(En);class Kv extends Vt{constructor({radius:e,map:t}){super(new Pa(e,32,32),new xi({map:t})),this.radius=e,this.castShadow=!0,this.map=t}}class Zv extends vi.Body{constructor({radius:e,mass:t}){super({mass:t});const n=new vi.Sphere(e);this.addShape(n)}}class $v{constructor({radius:e,map:t,mass:n}){Ba(this,"isGrounded",!1);this.meshShpere=new Kv({radius:e,map:t}),this.cannonSphere=new Zv({radius:e,mass:n}),this.collideSphere=new ln(new Q,new Q),this.jumpForce=new vi.Vec3(0,5,0),this.dodgeSpeed=2}setCollide(e,t){this.collideSphere.setFromPoints(e,t)}chechCollision(e){e&&e.collideSurface.intersectsSphere(this.collideSphere)}updateCollide(){const e=this.meshShpere.position.clone(),t=this.meshShpere.geometry.parameters.radius;this.collideSphere.center.copy(e),this.collideSphere.radius=t}jump(){this.cannonSphere.collisionResponse&&this.cannonSphere.applyImpulse(this.jumpForce,this.cannonSphere.position)}setVelocity(e){const t=this.cannonSphere.velocity;this.cannonSphere.velocity.set(this.dodgeSpeed*e,t.y,t.z)}stopMovement(){this.cannonSphere.velocity,this.cannonSphere.velocity.set(0,0,0)}moveRight(){this.setVelocity(1)}moveLeft(){this.setVelocity(-1)}moveForward(){this.cannonSphere.velocity.set(0,0,-this.dodgeSpeed)}}function Rl(i,e){if(e===Th)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===la||e===jl){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===la)for(let a=1;a<=n;a++)r.push(t.getX(0)),r.push(t.getX(a)),r.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(r.push(t.getX(a)),r.push(t.getX(a+1)),r.push(t.getX(a+2))):(r.push(t.getX(a+2)),r.push(t.getX(a+1)),r.push(t.getX(a)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class Jv extends rr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ig(t)}),this.register(function(t){return new dg(t)}),this.register(function(t){return new fg(t)}),this.register(function(t){return new pg(t)}),this.register(function(t){return new sg(t)}),this.register(function(t){return new ag(t)}),this.register(function(t){return new og(t)}),this.register(function(t){return new lg(t)}),this.register(function(t){return new ng(t)}),this.register(function(t){return new cg(t)}),this.register(function(t){return new rg(t)}),this.register(function(t){return new ug(t)}),this.register(function(t){return new hg(t)}),this.register(function(t){return new eg(t)}),this.register(function(t){return new mg(t)}),this.register(function(t){return new vg(t)})}load(e,t,n,r){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const h=gr.extractUrlBase(e);a=gr.resolveURL(h,this.path)}else a=gr.extractUrlBase(e);this.manager.itemStart(e);const o=function(h){r?r(h):console.error(h),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Sc(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(h){try{s.parse(h,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===bc){try{a[pt.KHR_BINARY_GLTF]=new gg(e)}catch(c){r&&r(c);return}s=JSON.parse(a[pt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new Pg(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const c=this.pluginCallbacks[u](h);c.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[c.name]=c,a[c.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const c=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(c){case pt.KHR_MATERIALS_UNLIT:a[c]=new tg;break;case pt.KHR_DRACO_MESH_COMPRESSION:a[c]=new _g(s,this.dracoLoader);break;case pt.KHR_TEXTURE_TRANSFORM:a[c]=new xg;break;case pt.KHR_MESH_QUANTIZATION:a[c]=new yg;break;default:d.indexOf(c)>=0&&o[c]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+c+'".')}}h.setExtensions(a),h.setPlugins(o),h.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}}function Qv(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const pt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class eg{constructor(e){this.parser=e,this.name=pt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let h;const u=new et(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Ht);const c=l.range!==void 0?l.range:0;switch(l.type){case"directional":h=new Ia(u),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new Nv(u),h.distance=c;break;case"spot":h=new Lv(u),h.distance=c,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,h.angle=l.spot.outerConeAngle,h.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return h.position.set(0,0,0),h.decay=2,Wn(h,l),l.intensity!==void 0&&(h.intensity=l.intensity),h.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(h),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class tg{constructor(){this.name=pt.KHR_MATERIALS_UNLIT}getMaterialType(){return Yn}extendParams(e,t,n){const r=[];e.color=new et(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Ht),e.opacity=a[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,Ct))}return Promise.all(r)}}class ng{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class ig{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ht(o,o)}return Promise.all(s)}}class rg{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class sg{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new et(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=r.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Ht)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Ct)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class ag{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class og{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new et().setRGB(o[0],o[1],o[2],Ht),Promise.all(s)}}class lg{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class cg{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new et().setRGB(o[0],o[1],o[2],Ht),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Ct)),Promise.all(s)}}class hg{constructor(e){this.parser=e,this.name=pt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class ug{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class dg{constructor(e){this.parser=e,this.name=pt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class fg{constructor(e){this.parser=e,this.name=pt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let l=n.textureLoader;if(o.uri){const h=n.options.manager.getHandler(o.uri);h!==null&&(l=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,a.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class pg{constructor(e){this.parser=e,this.name=pt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let l=n.textureLoader;if(o.uri){const h=n.options.manager.getHandler(o.uri);h!==null&&(l=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,a.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class mg{constructor(e){this.name=pt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=r.byteOffset||0,h=r.byteLength||0,u=r.count,c=r.byteStride,d=new Uint8Array(o,l,h);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,c,d,r.mode,r.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(u*c);return a.decodeGltfBuffer(new Uint8Array(f),u,c,d,r.mode,r.filter),f})})}else return null}}class vg{constructor(e){this.name=pt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const h of r.primitives)if(h.mode!==nn.TRIANGLES&&h.mode!==nn.TRIANGLE_STRIP&&h.mode!==nn.TRIANGLE_FAN&&h.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const h in a)o.push(this.parser.getDependency("accessor",a[h]).then(u=>(l[h]=u,l[h])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(h=>{const u=h.pop(),c=u.isGroup?u.children:[u],d=h[0].count,f=[];for(const v of c){const g=new st,p=new Q,m=new Qn,_=new Q(1,1,1),y=new fv(v.geometry,v.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,x),l.SCALE&&_.fromBufferAttribute(l.SCALE,x),y.setMatrixAt(x,g.compose(p,m,_));for(const x in l)if(x==="_COLOR_0"){const w=l[x];y.instanceColor=new fa(w.array,w.itemSize,w.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&v.geometry.setAttribute(x,l[x]);At.prototype.copy.call(y,v),this.parser.assignFinalMaterial(y),f.push(y)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const bc="glTF",dr=12,Cl={JSON:1313821514,BIN:5130562};class gg{constructor(e){this.name=pt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,dr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==bc)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-dr,s=new DataView(e,dr);let a=0;for(;a<r;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===Cl.JSON){const h=new Uint8Array(e,dr+a,o);this.content=n.decode(h)}else if(l===Cl.BIN){const h=dr+a;this.body=e.slice(h,h+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class _g{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=pt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},h={};for(const u in a){const c=va[u]||u.toLowerCase();o[c]=a[u]}for(const u in e.attributes){const c=va[u]||u.toLowerCase();if(a[u]!==void 0){const d=n.accessors[e.attributes[u]],f=Wi[d.componentType];h[c]=f.name,l[c]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(c,d){r.decodeDracoFile(u,function(f){for(const v in f.attributes){const g=f.attributes[v],p=l[v];p!==void 0&&(g.normalized=p)}c(f)},o,h,Ht,d)})})}}class xg{constructor(){this.name=pt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class yg{constructor(){this.name=pt.KHR_MESH_QUANTIZATION}}class Ac extends Er{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let a=0;a!==r;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,h=o*3,u=r-t,c=(n-t)/u,d=c*c,f=d*c,v=e*h,g=v-h,p=-2*f+3*d,m=f-d,_=1-p,y=m-d+c;for(let x=0;x!==o;x++){const w=a[g+x+o],R=a[g+x+l]*u,P=a[v+x+o],F=a[v+x]*u;s[x]=_*w+y*R+p*P+m*F}return s}}const Mg=new Qn;class Sg extends Ac{interpolate_(e,t,n,r){const s=super.interpolate_(e,t,n,r);return Mg.fromArray(s).normalize().toArray(s),s}}const nn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Wi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Pl={9728:zt,9729:Wt,9984:oa,9985:es,9986:Oi,9987:Nn},Ll={33071:rn,33648:is,10497:Yi},$s={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},va={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},kn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Eg={CUBICSPLINE:void 0,LINEAR:Ki,STEP:yr},Js={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Tg(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new xi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Un})),i.DefaultMaterial}function si(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Wn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function wg(i,e,t){let n=!1,r=!1,s=!1;for(let h=0,u=e.length;h<u;h++){const c=e[h];if(c.POSITION!==void 0&&(n=!0),c.NORMAL!==void 0&&(r=!0),c.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);const a=[],o=[],l=[];for(let h=0,u=e.length;h<u;h++){const c=e[h];if(n){const d=c.POSITION!==void 0?t.getDependency("accessor",c.POSITION):i.attributes.position;a.push(d)}if(r){const d=c.NORMAL!==void 0?t.getDependency("accessor",c.NORMAL):i.attributes.normal;o.push(d)}if(s){const d=c.COLOR_0!==void 0?t.getDependency("accessor",c.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(h){const u=h[0],c=h[1],d=h[2];return n&&(i.morphAttributes.position=u),r&&(i.morphAttributes.normal=c),s&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function bg(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ag(i){let e;const t=i.extensions&&i.extensions[pt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Qs(t.attributes):e=i.indices+":"+Qs(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+Qs(i.targets[n]);return e}function Qs(i){let e="";const t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function ga(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Rg(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Cg=new st;class Pg{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Qv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,s=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||r&&s<98?this.textureLoader=new Ec(this.options.manager):this.textureLoader=new Fv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Sc(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:n,userData:{}};return si(s,o,r),Wn(o,r),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const a=t[r].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[h,u]of a.children.entries())s(u,o.children[h])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[pt.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,a){n.load(gr.resolveURL(t.uri,r.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const a=$s[r.type],o=Wi[r.componentType],l=r.normalized===!0,h=new o(r.count*a);return Promise.resolve(new Zt(h,a,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=$s[r.type],h=Wi[r.componentType],u=h.BYTES_PER_ELEMENT,c=u*l,d=r.byteOffset||0,f=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,v=r.normalized===!0;let g,p;if(f&&f!==c){const m=Math.floor(d/f),_="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+m+":"+r.count;let y=t.cache.get(_);y||(g=new h(o,m*f,r.count*f/u),y=new ov(g,f/u),t.cache.add(_,y)),p=new Aa(y,l,d%f/u,v)}else o===null?g=new h(r.count*l):g=new h(o,d,r.count*l),p=new Zt(g,l,v);if(r.sparse!==void 0){const m=$s.SCALAR,_=Wi[r.sparse.indices.componentType],y=r.sparse.indices.byteOffset||0,x=r.sparse.values.byteOffset||0,w=new _(a[1],y,r.sparse.count*m),R=new h(a[2],x,r.sparse.count*l);o!==null&&(p=new Zt(p.array.slice(),p.itemSize,p.normalized));for(let P=0,F=w.length;P<F;P++){const K=w[P];if(p.setX(K,R[P*l]),l>=2&&p.setY(K,R[P*l+1]),l>=3&&p.setZ(K,R[P*l+2]),l>=4&&p.setW(K,R[P*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const r=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const h=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const d=(s.samplers||{})[a.sampler]||{};return u.magFilter=Pl[d.magFilter]||Wt,u.minFilter=Pl[d.minFilter]||Nn,u.wrapS=Ll[d.wrapS]||Yi,u.wrapT=Ll[d.wrapT]||Yi,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=h,h}loadImageSource(e,t){const n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(c=>c.clone());const a=r.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",h=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(c){h=!0;const d=new Blob([c],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(c){return new Promise(function(d,f){let v=d;t.isImageBitmapLoader===!0&&(v=function(g){const p=new Dt(g);p.needsUpdate=!0,d(p)}),t.load(gr.resolveURL(c,s.path),v,void 0,f)})}).then(function(c){return h===!0&&o.revokeObjectURL(l),c.userData.mimeType=a.mimeType||Rg(a.uri),c}).catch(function(c){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),c});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[pt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[pt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[pt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new xc,Sn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new _c,Sn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(r||s||a){let o="ClonedMaterial:"+n.uuid+":";r&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return xi}loadMaterial(e){const t=this,n=this.json,r=this.extensions,s=n.materials[e];let a;const o={},l=s.extensions||{},h=[];if(l[pt.KHR_MATERIALS_UNLIT]){const c=r[pt.KHR_MATERIALS_UNLIT];a=c.getMaterialType(),h.push(c.extendParams(o,s,t))}else{const c=s.pbrMetallicRoughness||{};if(o.color=new et(1,1,1),o.opacity=1,Array.isArray(c.baseColorFactor)){const d=c.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Ht),o.opacity=d[3]}c.baseColorTexture!==void 0&&h.push(t.assignTexture(o,"map",c.baseColorTexture,Ct)),o.metalness=c.metallicFactor!==void 0?c.metallicFactor:1,o.roughness=c.roughnessFactor!==void 0?c.roughnessFactor:1,c.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(o,"metalnessMap",c.metallicRoughnessTexture)),h.push(t.assignTexture(o,"roughnessMap",c.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=xn);const u=s.alphaMode||Js.OPAQUE;if(u===Js.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Js.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Yn&&(h.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new ht(1,1),s.normalTexture.scale!==void 0)){const c=s.normalTexture.scale;o.normalScale.set(c,c)}if(s.occlusionTexture!==void 0&&a!==Yn&&(h.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Yn){const c=s.emissiveFactor;o.emissive=new et().setRGB(c[0],c[1],c[2],Ht)}return s.emissiveTexture!==void 0&&a!==Yn&&h.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Ct)),Promise.all(h).then(function(){const c=new a(o);return s.name&&(c.name=s.name),Wn(c,s),t.associations.set(c,{materials:e}),s.extensions&&si(r,c,s),c})}createUniqueName(e){const t=yt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function s(o){return n[pt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Il(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const h=e[o],u=Ag(h),c=r[u];if(c)a.push(c.promise);else{let d;h.extensions&&h.extensions[pt.KHR_DRACO_MESH_COMPRESSION]?d=s(h):d=Il(new vn,h,t),r[u]={primitive:h,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,r=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,h=a.length;l<h;l++){const u=a[l].material===void 0?Tg(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const h=l.slice(0,l.length-1),u=l[l.length-1],c=[];for(let f=0,v=u.length;f<v;f++){const g=u[f],p=a[f];let m;const _=h[f];if(p.mode===nn.TRIANGLES||p.mode===nn.TRIANGLE_STRIP||p.mode===nn.TRIANGLE_FAN||p.mode===void 0)m=s.isSkinnedMesh===!0?new cv(g,_):new Vt(g,_),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===nn.TRIANGLE_STRIP?m.geometry=Rl(m.geometry,jl):p.mode===nn.TRIANGLE_FAN&&(m.geometry=Rl(m.geometry,la));else if(p.mode===nn.LINES)m=new pv(g,_);else if(p.mode===nn.LINE_STRIP)m=new Ca(g,_);else if(p.mode===nn.LINE_LOOP)m=new mv(g,_);else if(p.mode===nn.POINTS)m=new vv(g,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&bg(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),Wn(m,s),p.extensions&&si(r,m,p),t.assignFinalMaterial(m),c.push(m)}for(let f=0,v=c.length;f<v;f++)t.associations.set(c[f],{meshes:e,primitives:f});if(c.length===1)return s.extensions&&si(r,c[0],s),c[0];const d=new ui;s.extensions&&si(r,d,s),t.associations.set(d,{meshes:e});for(let f=0,v=c.length;f<v;f++)d.add(c[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new jt(Kh.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new wa(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Wn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const s=r.pop(),a=r,o=[],l=[];for(let h=0,u=a.length;h<u;h++){const c=a[h];if(c){o.push(c);const d=new st;s!==null&&d.fromArray(s.array,h*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new Ra(o,l)})}loadAnimation(e){const t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,a=[],o=[],l=[],h=[],u=[];for(let c=0,d=r.channels.length;c<d;c++){const f=r.channels[c],v=r.samplers[f.sampler],g=f.target,p=g.node,m=r.parameters!==void 0?r.parameters[v.input]:v.input,_=r.parameters!==void 0?r.parameters[v.output]:v.output;g.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",_)),h.push(v),u.push(g))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(h),Promise.all(u)]).then(function(c){const d=c[0],f=c[1],v=c[2],g=c[3],p=c[4],m=[];for(let _=0,y=d.length;_<y;_++){const x=d[_],w=f[_],R=v[_],P=g[_],F=p[_];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const K=n._createAnimationTracks(x,w,R,P,F);if(K)for(let M=0;M<K.length;M++)m.push(K[M])}return new Ev(s,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,h=r.weights.length;l<h;l++)o.morphTargetInfluences[l]=r.weights[l]}),a})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=r.children||[];for(let h=0,u=o.length;h<u;h++)a.push(n.getDependency("node",o[h]));const l=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(a),l]).then(function(h){const u=h[0],c=h[1],d=h[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Cg)});for(let f=0,v=c.length;f<v;f++)u.add(c[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?r.createUniqueName(s.name):"",o=[],l=r._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(r.getDependency("camera",s.camera).then(function(h){return r._getNodeRef(r.cameraCache,s.camera,h)})),r._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){o.push(h)}),this.nodeCache[e]=Promise.all(o).then(function(h){let u;if(s.isBone===!0?u=new gc:h.length>1?u=new ui:h.length===1?u=h[0]:u=new At,u!==h[0])for(let c=0,d=h.length;c<d;c++)u.add(h[c]);if(s.name&&(u.userData.name=s.name,u.name=a),Wn(u,s),s.extensions&&si(n,u,s),s.matrix!==void 0){const c=new st;c.fromArray(s.matrix),u.applyMatrix4(c)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,s=new ui;n.name&&(s.name=r.createUniqueName(n.name)),Wn(s,n),n.extensions&&si(t,s,n);const a=n.nodes||[],o=[];for(let l=0,h=a.length;l<h;l++)o.push(r.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,c=l.length;u<c;u++)s.add(l[u]);const h=u=>{const c=new Map;for(const[d,f]of r.associations)(d instanceof Sn||d instanceof Dt)&&c.set(d,f);return u.traverse(d=>{const f=r.associations.get(d);f!=null&&c.set(d,f)}),c};return r.associations=h(s),s})}_createAnimationTracks(e,t,n,r,s){const a=[],o=e.name?e.name:e.uuid,l=[];kn[s.path]===kn.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let h;switch(kn[s.path]){case kn.weights:h=Ji;break;case kn.rotation:h=_i;break;case kn.position:case kn.scale:h=Qi;break;default:switch(n.itemSize){case 1:h=Ji;break;case 2:case 3:default:h=Qi;break}break}const u=r.interpolation!==void 0?Eg[r.interpolation]:Ki,c=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const v=new h(l[d]+"."+kn[s.path],t.array,c,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),a.push(v)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ga(t.constructor),r=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const r=this instanceof _i?Sg:Ac;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Lg(i,e,t){const n=e.attributes,r=new Tn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,h=o.max;if(l!==void 0&&h!==void 0){if(r.set(new Q(l[0],l[1],l[2]),new Q(h[0],h[1],h[2])),o.normalized){const u=ga(Wi[o.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new Q,l=new Q;for(let h=0,u=s.length;h<u;h++){const c=s[h];if(c.POSITION!==void 0){const d=t.json.accessors[c.POSITION],f=d.min,v=d.max;if(f!==void 0&&v!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(v[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(v[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(v[2]))),d.normalized){const g=ga(Wi[d.componentType]);l.multiplyScalar(g)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}i.boundingBox=r;const a=new ln;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=a}function Il(i,e,t){const n=e.attributes,r=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(const a in n){const o=va[a]||a.toLowerCase();o in i.attributes||r.push(s(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});r.push(a)}return _t.workingColorSpace!==Ht&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${_t.workingColorSpace}" not supported.`),Wn(i,e),Lg(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?wg(i,e.targets,t):i})}class Ig extends Vt{constructor(){super(),new Jv().load("../../assets/startPowerUp.glb",t=>{const n=t.scene,r=new xi({color:"#FDCB18",metalness:1,roughness:.5,emissive:"#FDCB18",emissiveIntensity:1});n.traverse(s=>{s.isMesh&&(s.material=r)}),n.scale.set(.14,.14,.14),this.add(n)})}}class Ng{constructor(){this.meshPowerUp=new Ig,this.collidePowerUp=new ln(new Q,new Q),this.activated=!1}setCollide(e,t){this.collidePowerUp.setFromPoints(e,t)}move(e){const t=this.meshPowerUp.position.z+e/10;this.meshPowerUp.position.set(this.meshPowerUp.position.x,this.meshPowerUp.position.y,t)}checkCollision(e){return e?!!e.collideSphere.intersectsSphere(this.collidePowerUp):!1}updateCollide(){const e=this.meshPowerUp.position.clone(),t=1;this.collidePowerUp.center.copy(e),this.collidePowerUp.radius=t}triggerCollision(){if(!this.activated){const e={x:this.meshPowerUp.scale.x,y:this.meshPowerUp.scale.y,z:this.meshPowerUp.scale.z},t={x:5+e.x,y:5+e.y,z:5+e.z};new wc(e).to(t,500).onUpdate(r=>{this.meshPowerUp.scale.set(r.x,r.y,r.z)}).start(),this.activated=!0}}rotate(e){this.meshPowerUp.rotation.y+=e}}class Dg extends Vt{constructor({width:e,height:t,map:n,depth:r}){super(new ei(e,t,r),new xi({map:n,transparent:!0})),this.width=e,this.height=t,this.depth=r,this.map=n,this.receiveShadow=!0}setPosition(e,t,n){this.position.set(e,t,n)}}class Ug extends Vt{constructor({width:e,height:t,depth:n,map:r}){super(new ei(e,t,n),new xi({map:r})),this.width=e,this.height=t,this.depth=n,this.map=r,this.receiveShadow=!0}setPosition(e,t,n){this.position.set(e,t,n)}}class Rc extends vi.Body{constructor({width:e,height:t,depth:n,mass:r}){super({mass:r});const s=new vi.Box(new vi.Vec3(e/2,t/2,n/2));this.addShape(s)}}class Nl{constructor({width:e=8,height:t=1,depth:n=20,textureMap:r,mass:s}){this.meshSurface=new Ug({width:e,height:t,depth:n,map:r}),this.cannonSurface=new Rc({width:e,height:t,depth:n,mass:s}),this.obstacles=[]}move(e){const t=this.cannonSurface.position.z+e;this.meshSurface.position.set(this.cannonSurface.position.x,0,t),this.cannonSurface.position.set(this.cannonSurface.position.x,0,t)}initialPosition(e,t,n){this.meshSurface.setPosition(e,t,n),this.cannonSurface.position.set(e,t,n)}updateWidth(e){this.meshSurface.width=e,this.cannonSurface.width=e}spawObstacles(e,t){this.obstacles.splice(0,this.obstacles.length);for(let n=0;n<e;n++){const r=this.meshSurface.position.z,s=this.meshSurface.height,a=Math.random()*this.meshSurface.width-this.meshSurface.width/2,o=new Fg({width:1,height:1,depth:1,map:t,mass:1});o.meshSurface.position.set(a,s,r),o.cannonSurface.position.set(a,s,r),this.obstacles.push(o)}return this.obstacles}getObstacles(){return this.obstacles}}class Fg{constructor({width:e,height:t,depth:n,map:r,mass:s}){this.meshSurface=new Dg({width:e,height:t,map:r,depth:n}),this.cannonSurface=new Rc({width:e,height:t,depth:n,mass:s}),this.collideSurface=new Tn(new Q,new Q),this.exploded=!1,this.isCollisionDetected=!1}moveObs(e){const t=this.cannonSurface.position.z+e;this.cannonSurface.position.set(this.cannonSurface.position.x,1,t),this.meshSurface.position.set(this.cannonSurface.position.x,1,t)}updateCollider(){const e=this.collideSurface.setFromObject(this.meshSurface);this.collideSurface.copy(e)}checkCollider(e){if(e)return!!e.collideSphere.intersectsBox(this.collideSurface)}setColision(){if(!this.exploded){const e={x:this.meshSurface.scale.x,y:this.meshSurface.scale.y,z:this.meshSurface.scale.z},t={x:5*e.x,y:5*e.y,z:5*e.z},n=new wc(e).to(t,500).onUpdate(r=>{this.meshSurface.scale.set(r.x,r.y,r.z)});this.meshSurface.material.setValues({opacity:.2}),n.start(),this.exploded=!0}}setTexture(e){if(!(e instanceof Dt)){console.error("Invalid texture provided.");return}this.meshSurface.material.map=e,this.meshSurface.material.needsUpdate=!0}}function Bg(i,e,t,n){let r;return t&&t.meshSurface?(r=new Nl({textureMap:n,mass:null}),r.initialPosition(0,0,t.meshSurface.position.z-20)):r=new Nl({textureMap:n,mass:null}),i.add(r.meshSurface),e.addBody(r.cannonSurface),r}function Og(i,e,t){i&&i.initialPosition(0,0,e)}function zg(i,e,t){const n=new Ng;return n.meshPowerUp.position.set(i,e,t),n.setCollide(n.meshPowerUp.position,1),n}function Cc(i,e,t){const r=e-t;r>50?i.moveRight():r<-50&&i.moveLeft()}function Vg(i){i.stopMovement()}class Ua{constructor(){this.isCreated=!1}updateCreated(){this.isCreated=!this.isCreated}}class Hg{constructor(){this.score=0,this.scoreElement=document.createElement("div"),this.scoreElement.style.position="absolute",this.scoreElement.style.top="10px",this.scoreElement.style.left="50%",this.scoreElement.style.transform="translateX(-50%)",this.scoreElement.style.color="white",this.scoreElement.style.fontFamily="Arial, sans-serif",this.scoreElement.style.fontSize="24px",this.shouldFreeze=!1,document.body.appendChild(this.scoreElement),this.updateScore()}freezeScore(){this.shouldFreeze=!0}updateScore(){this.shouldFreeze||(this.scoreElement.textContent=`Score: ${this.score}`)}incrementScore(e=10){this.shouldFreeze||(this.score+=e,this.updateScore())}}class Gg extends Ua{constructor(){super(),this.layer=document.createElement("div"),this.layer.id="overlayer",this.layer.style.width="100%",this.layer.style.position="fixed",this.layer.style.top="0px",this.layer.style.left="0px",this.layer.style.right="0px",this.layer.style.bottom="0px",this.layer.style.height="100%",this.layer.style.backgroundColor="rgba(0,0,0,0.7)",this.layer.style.zIndex=2}addLayer(){this.isCreated||(document.body.appendChild(this.layer),this.updateCreated())}removelayer(){document.body.removeChild(this.layer)}}class kg extends Ua{constructor({text:e,color:t}){super(),this.gameText=document.createElement("div"),this.gameText.textContent=e,this.gameText.classList.add("gameOver"),this.gameText.style.color=t}addText(){this.isCreated||(document.body.appendChild(this.gameText),this.updateCreated())}removeText(){this.gameText.style.opacity=0,setTimeout(()=>{document.body.removeChild(this.gameText)},1e3)}}class Wg extends Ua{constructor(){super(),this.playButton=document.createElement("button"),this.playButton.type="button",this.playButton.textContent="Play Again",this.playButton.classList.add("playAgain"),this.playButton.addEventListener("click",()=>{console.log("Play again button clicked!")})}addButton(){this.isCreated||(setTimeout(()=>{document.body.appendChild(this.playButton)},2e3),this.updateCreated())}}class Xg{constructor(e){const t=[];for(const r of e)t.push(new Yn({map:r,side:Kt}));const n=new ei(1e3,1e3,1e3);this.mesh=new Vt(n,t)}getMesh(){return this.mesh}}const _n=new Ec,qg=[_n.load("./assets/skybox/bkg1_right.png"),_n.load("./assets/skybox/bkg1_left.png"),_n.load("./assets/skybox/bkg1_top.png"),_n.load("./assets/skybox/bkg1_bot.png"),_n.load("./assets/skybox/bkg1_front.png"),_n.load("./assets/skybox/bkg1_back.png")],Yg=_n.load("./assets/textures/treadmill.jpg"),jg=_n.load("./assets/textures/beachball.jpg"),Dl=_n.load("./assets/textures/redWood.jpg"),Kg=_n.load("./assets/textures/greenWodd.jpg"),pn=new av,Sr=new jt(75,window.innerWidth/window.innerHeight,.1,1e3);Sr.position.z=8;Sr.position.y=3;const Tr=new vc;Tr.shadowMap.enabled=!0;Tr.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(Tr.domElement);const Zg=new Xg(qg),hi=[],ea=[];let Ul,fr=!1,ta=0,Fl=!0,Bi=.2;const na=new Hg,$g=new Gg,Jg=new kg({text:"Game Over",top:"40%",left:"38%",color:"	#FFD580"}),Qg=new Wg,Fa=new Ia(16777215,.5);Fa.castShadow=!0;Fa.position.y=5;pn.add(Fa);const e_=new Uv(4210752);pn.add(e_);const Pc=new Ia(16777215,.5);Pc.position.set(1,1,1);pn.add(Pc);pn.add(Zg.mesh);const Xn=new vi.World;Xn.gravity.set(0,-9.8,0);const Bl=1/60,wt=new $v({radius:.5,map:jg,mass:1});wt.meshShpere.position.y=3;wt.cannonSphere.position.y=3;wt.setCollide(wt.meshShpere.position,wt.radius);pn.add(wt.meshShpere);Xn.addBody(wt.cannonSphere);const Lc=()=>{requestAnimationFrame(Lc),Xn.step(Bl),jv(),ta+=Bl,Fl||(Bi=.01,$g.addLayer(),Jg.addText(),Qg.addButton(),na.freezeScore()),wt.meshShpere.position.copy(wt.cannonSphere.position),wt.meshShpere.quaternion.copy(wt.cannonSphere.quaternion),wt.updateCollide(),(wt.meshShpere.position.y<=-2||wt.meshShpere.position.z>=15)&&(Fl=!1),fr?hi.forEach(i=>{i.getObstacles().forEach(e=>{e.setTexture(Kg),Xn.remove(e.cannonSurface)})}):hi.forEach(i=>{i.getObstacles().forEach(e=>{e.setTexture(Dl),Xn.addBody(e.cannonSurface)})}),hi.forEach((i,e)=>{if(i.move(Bi),i.meshSurface.position.z>=20&&(i.getObstacles().forEach((t,n)=>{Xn.remove(t.cannonSurface),pn.remove(t.meshSurface),na.incrementScore(5)}),Og(hi[e],-180),Ul=hi[e].spawObstacles(1,Dl),Ul.forEach(t=>{pn.add(t.meshSurface),Xn.addBody(t.cannonSurface)})),ta>=20){const t=Math.random()*i.meshSurface.width-i.meshSurface.width/2,n=zg(t,1,-180);pn.add(n.meshPowerUp),ea.push(n),ta=0}i.getObstacles().forEach((t,n)=>{t.moveObs(Bi),t.meshSurface.position.copy(t.cannonSurface.position),t.meshSurface.quaternion.copy(t.cannonSurface.quaternion),t.updateCollider(),t.checkCollider(wt)&&fr&&(t.setColision(),na.incrementScore(1)),wt.chechCollision(t)}),ea.forEach((t,n)=>{t.move(Bi),t.rotate(.008),!fr&&t.checkCollision(wt)&&(fr=!0,Bi=.2,t.triggerCollision(),setTimeout(()=>{Bi=.2,fr=!1},5e3)),t.updateCollide(),t.meshPowerUp.position.z>=22&&(pn.remove(t.meshPowerUp),ea.shift())})}),Tr.render(pn,Sr)};window.addEventListener("resize",()=>{const i=window.innerWidth,e=window.innerHeight;Sr.aspect=i/e,Sr.updateProjectionMatrix(),Tr.setSize(i,e)});document.addEventListener("keydown",i=>{switch(i.code){case"ArrowLeft":wt.moveLeft();break;case"ArrowRight":wt.moveRight();break;case"Space":wt.jump()}});document.addEventListener("keyup",i=>{(i.key==="ArrowLeft"||i.key==="ArrowRight")&&wt.stopMovement()});for(let i=0;i<10;i++)hi.push(Bg(pn,Xn,hi[i-1],Yg));let _a=0,xa=0;document.addEventListener("touchstart",i=>{_a=i.touches[0].clientX,Cc(wt,xa,_a)});document.addEventListener("touchmove",i=>{xa=i.touches[0].clientX,Cc(wt,xa,_a)});document.addEventListener("touchend",()=>{Vg(wt)});Lc();
