import s from '../Section/Section.module.css';
const Section = ({ title, children }) => {
  return (
    <section className={s.section}>
      <h2 className={s.title}>{title}</h2>
      {children}
    </section>
  );
};
export default Section;
