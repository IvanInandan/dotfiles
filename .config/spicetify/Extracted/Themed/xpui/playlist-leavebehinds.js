"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[9718],{21630:(e,l,s)=>{s.r(l),s.d(l,{default:()=>p});var t=s(79474),a=s(85980),n=s(63275),i=s(34746),r=s(6150),d=s(24241),u=s(57842),o=s(13274);const c=({uri:e,playlistId:l,leavebehinds:s})=>{const t=d.ui.PLAYLIST;return s&&s.length>0?(0,o.jsx)(i.o,{surface:t,uri:e,leavebehinds:s.slice(0,u.pU),seeAllButton:s.length>u.pU?(0,o.jsx)(r.J,{leavebehinds:s,surface:t,pathname:`/playlist/${l}/see-all-ads`,state:{uri:e},uri:e}):null}):null};var h=s(11583);const f=e=>e.ads.sponsoredPlaylist.sponsoredPlaylist.get("allSponsorships"),p=({uri:e,playlistName:l})=>{const s=(0,n.o_)(e)?.id,i=(0,a.d4)(f),r=i?.some((e=>e.playlistId===s)),p=d.ui.PLAYLIST,{data:b,error:v,getLeavebehinds:g}=(0,h.A)({surface:p,uri:e,playlistName:l});if((0,t.useEffect)((()=>{g()}),[g]),!b?.leavebehindAds||v||r)return null;const m=(0,u.iT)(b,e);return b&&b.leavebehindAds.length>0&&s?(0,o.jsx)(c,{uri:e,playlistId:s,leavebehinds:m}):null}},6150:(e,l,s)=>{s.d(l,{J:()=>c});var t=s(48581),a=s(72232),n=s(69737),i=s(89551),r=s(65804),d=s(24241),u=s(57842),o=s(13274);const c=({leavebehinds:e,surface:l,uri:s,pathname:c,state:h})=>{const f=(0,r.vh)(),p=`${i.R.get("view.see-all")} (${e.length<=u.E9?i.R.formatNumber(e.length):i.R.formatNumber(u.E9)})`;return(0,o.jsx)(t.N_,{to:c,state:h,children:(0,o.jsx)(a.H,{"data-testid":"leavebehinds-see-all",size:"small",onClick:()=>{f.send((0,n.x)({leavebehind_request_id:e[0].requestId,event:"event_clicked",event_reason:"cta_see_all",surface:(0,d.Fh)(l),uri:s}))},children:p})})}}}]);
//# sourceMappingURL=playlist-leavebehinds.js.map