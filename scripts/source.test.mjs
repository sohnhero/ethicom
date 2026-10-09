import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, statSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import { brand, expertises, formationModules, formationAteliers } from '../lib/content.js';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const read=p=>readFileSync(resolve(root,p),'utf8');
const page=read('app/page.jsx'),css=read('app/globals.css'),head=read('components/Header.jsx'),form=read('components/ContactForm.jsx'),api=read('app/api/contact/route.js');
test('fidélité aux contenus vérifiés',()=>{
 assert.equal(brand.name,'ETHICOM');assert.equal(brand.slogan,'L’éthique au service de la performance');
 assert.equal(brand.founderName,'Dr Djibril Safi SECK');
 assert.deepEqual(brand.pillars,['Performance','Impact','Durabilité']);
 assert.deepEqual(expertises.map(x=>x.services.length),[4,6,5,4]);
 assert.equal(formationModules.length,8);assert.equal(formationAteliers.length,3);
});
test('parcours institutionnel et navigation raccordés',()=>{
 for(const id of ['accueil','cabinet','expertises','approche','details-expertises','formation-details','fondateur','ressources','contact'])assert.match(page,new RegExp(`id="${id}"`));
 for(const href of ['#cabinet','#expertises','#approche','#formation-details','#fondateur','#contact'])assert.ok(head.includes(href));
 assert.match(head,/Escape/);assert.match(page,/<details/);
});
test('refonte photographique et ressources optimisées',()=>{
 for(const file of ['reunion-strategique','diagnostic-institutionnel','formation-capacites']){
  const name=`public/photos/${file}.webp`; assert.ok(existsSync(resolve(root,name)));assert.ok(statSync(resolve(root,name)).size<250_000,`${name} non optimisée`);assert.ok(page.includes(`${file}.webp`));
 }
 assert.match(page,/hero-grid/);assert.match(page,/services-grid/);assert.match(page,/training-grid/);
 assert.ok(existsSync(resolve(root,'public/brand/ethicom-logo.svg')));
});
test('responsive et motions accessibles',()=>{
 for(const bp of ['max-width:640px','max-width:420px','max-width:359px'])assert.ok(css.includes(bp));
 assert.match(css,/prefers-reduced-motion/);assert.match(css,/minmax\(0,1fr\)/);
 assert.ok(existsSync(resolve(root,'preview.html')));
});
test('formulaire non factice et service conditionné à une configuration',()=>{
 assert.match(form,/fetch\("\/api\/contact"/);assert.match(form,/Copier ma demande/);
 assert.match(api,/RESEND_API_KEY/);assert.match(api,/ETHICOM_CONTACT_EMAIL/);
 assert.match(api,/status: 503/);assert.match(api,/https:\/\/api\.resend\.com\/emails/);
});
