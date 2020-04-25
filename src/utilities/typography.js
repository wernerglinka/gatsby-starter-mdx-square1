import Typography from "typography";
import moraga from "typography-theme-moraga";
moraga.baseFontSize = "16px";
moraga.bodyWeight = "300";

const typography = new Typography(moraga);

// Export helper functions
export const { scale, rhythm, options } = typography;
export default typography;
