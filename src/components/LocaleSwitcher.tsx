import {useLocale, useTranslations} from 'next-intl'; 
import {routing} from '@/i18n/routing';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';


export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();


  return (
    
    <div className='flex items-center justify-center gap-2  p-2 text-semibold text-white rounded-lg' >
    <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
      {routing.locales.map((cur) => (
        <option key={cur} value={cur}>
          {t('locale', {locale: cur})}
        </option>
      ))}
    </LocaleSwitcherSelect>
    </div>
    
  );
}  