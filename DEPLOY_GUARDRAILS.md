# Deploy Guardrails

This file prevents publishing the wrong project/version.

## Canonical Target
- Project folder: `D:\bot\premium-trainer-site`
- Domain: `https://mariasportick.ru`
- Git repo: `Jusser39/-mariasportick.ru`
- Required branch: `main`
- Required baseline commit (blue homepage): `f4224ff`

## Required Check Before Deploy
Run:

```powershell
npm run verify:target
```

Expected output:

```text
Guardrail OK: premium-trainer-site with blue baseline is active.
```

If this check fails, do not deploy.

## Deploy Sequence
1. `npm run verify:target`
2. `npm run build`
3. `git add ... && git commit ... && git push origin main`
4. On server:
   - `cd /opt/mariasportick.ru/current`
   - `git fetch origin && git reset --hard origin/main`
   - `npm install && npm run build`
   - `systemctl restart mariasportick.service`
   - `curl -I https://mariasportick.ru/`

## Visual Fingerprint (Blue Version)
- Hero headline contains: `Изящные формы. Гибкость. Энергия.`
- Homepage should NOT show: `Движение. Сила. Гибкость`.
