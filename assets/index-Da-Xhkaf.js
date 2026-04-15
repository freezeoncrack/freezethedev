(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=document.getElementById(`lanyard-container`);async function t(){try{let t=await fetch(`https://lanyard.cnrad.dev/api/1184257409531793469`);if(!t.ok)throw Error(`Failed to fetch Lanyard data`);let n=await t.json();e.innerHTML=`
      <div style="display: flex; align-items: center; gap: 10px;">
        <img src="${n.discord_user.avatar_url}" alt="avatar" width="50" height="50" style="border-radius:50%;">
        <div>
          <strong>${n.discord_user.username}</strong><br>
          Status: ${n.discord_status||`offline`}
        </div>
      </div>
    `}catch(t){console.error(t),e.innerHTML=`Error loading Lanyard data.`}}setInterval(t,1e3),t();