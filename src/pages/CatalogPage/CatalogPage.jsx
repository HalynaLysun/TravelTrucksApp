// import css from "./CatalogPage.module.css";
// import MovieList from "../../components/MovieList/MovieList";
// import getSearchMovie from "../../movie-search-api";
// import { useEffect, useState } from "react";
// import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
// import Loader from "../../components/Loader/Loader";
// import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
// import ErrorSearch from "../../components/ErrorSearch/ErrorSearch";
// import { useSearchParams } from "react-router-dom";
import css from "./CatalogPage.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";

export default function CatalogPage() {
  const locationFieldId = useId();
  const filtersFieldId = useId();
  const typesFieldId = useId();

  const FeedbackSchema = Yup.object().shape({
    location: Yup.string().min(3, "Too short").max(50, "Too long"),
  });

  const initialValues = {
    location: "Kyiv, Ukraine",
  };

  return (
    <Formik
      initialValues={initialValues}
      //   onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form>
        <div>
          <label htmlFor={locationFieldId}>Location</label>
          <Field type="text" name="location" id={locationFieldId}></Field>
          <ErrorMessage name="location" as="span" />
        </div>
        <div>
          <label htmlFor={filtersFieldId}>Filters</label>
          <div id={filtersFieldId}>Vehicle equipment</div>
          <div role="group" aria-labelledby="checkbox-group">
            <label>
              <Field type="checkbox" name="checked" value="AC" />
              AC
            </label>
            <label>
              <Field type="checkbox" name="checked" value="Automatic" />
              Automatic
            </label>
            <label>
              <Field type="checkbox" name="checked" value="Kitchen" />
              Kitchen
            </label>
            <label>
              <Field type="checkbox" name="checked" value="TV" />
              TV
            </label>
            <label>
              <Field type="checkbox" name="checked" value="Bathroom" />
              Bathroom
            </label>
          </div>
        </div>

        <div>
          <label htmlFor={typesFieldId}></label>
          <div id={typesFieldId}>Vehicle type</div>
          <div role="group" aria-labelledby="checkbox-group">
            <label>
              <Field type="checkbox" name="checked" value="Van" />
              Van
            </label>
            <label>
              <Field type="checkbox" name="checked" value="Fully Integrated" />
              Fully Integrated
            </label>
            <label>
              <Field type="checkbox" name="checked" value="Alcove" />
              Alcove
            </label>
          </div>
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

// export default function CatalogPage() {
//   const [movies, setMovies] = useState([]);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const [searchParams, setSearchParams] = useSearchParams();

//   const queryMovie = searchParams.get("query") ?? "";

//   function handleSubmit(evt) {
//     evt.preventDefault();
//     setPage(1);
//     setMovies([]);
//     const form = evt.target;
//     const query = form.movie.value.trim();
//     searchParams.set("query", query);
//     setSearchParams(searchParams);
//     form.reset();
//   }

//   useEffect(() => {
//     async function fetchMovies() {
//       try {
//         if (!queryMovie) {
//           return;
//         }
//         setLoading(true);
//         const data = await getSearchMovie(queryMovie, page);
//         setMovies(data.results);
//       } catch (error) {
//         setError(true);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchMovies();
//   }, [queryMovie, page]);

//   const handleLoadMore = () => {
//     setPage(page + 1);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input className={css.input} type="text" name="movie" />
//         <button className={css.btn} type="submit">
//           Search
//         </button>
//       </form>
//       <MovieList movies={movies} />
//       {loading && <Loader />}
//       {movies.length === 0 && !loading && queryMovie && !error && (
//         <ErrorSearch />
//       )}
//       {error && <ErrorMessage />}
//       {movies.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}
//     </div>
//   );
// }
