// import Link from 'next/link';

// import { getTranslations } from 'next-intl/server';

// import { Header } from '@/components/organisms/header';

// // import { Header } from '@/components/organisms/website/common/header/header';

// export default async function NotFound() {
//   const t = await getTranslations('NotFoundPage');
//   const tCta = await getTranslations('Cta');
//   return (
//     <div className="p-12">
//       <Header/>
//       <h2 className="text-3xl text-center my-10 font-bold text-black">
//         {t('title')}
//       </h2>
//       <div className="flex justify-center">
//         <Link
//           href="/"
//           className="flex items-center justify-center rounded-3xl bg-primary px-12 py-4 text-center text-sm font-medium leading-5 text-white"
//         >
//           {tCta('backToHome')}
//         </Link>
//       </div>
//     </div>
//   );
// }
export default function NotFound() {
  return <div>This is not found page</div>;
}